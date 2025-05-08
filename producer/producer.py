import json, time, requests
from confluent_kafka import Producer

USGS_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query"
PARAMS  = {"format":"geojson", "orderby":"time", "limit":50}
TOPIC   = "earthquake-events"

p = Producer({'bootstrap.servers':'localhost:9092',
              'client.id':'eq-producer'})

def delivery_report(err, msg):
    if err:
        print(f"Delivery failed: {err}")
    else:
        print(f"Produced record to {msg.topic()} [{msg.partition()}] @ offset {msg.offset()}")

def fetch_quakes():
    r = requests.get(USGS_URL, params=PARAMS)
    features = r.json().get('features', [])
    records = []
    for feat in features:
        props = feat['properties']
        lon, lat, depth = feat['geometry']['coordinates']
        rec = {
            'id':    feat['id'],
            'mag':   props['mag'],
            'place': props['place'],
            'time':  props['time'],
            'lon':   lon,
            'lat':   lat,
            'depth': depth
        }
        records.append(rec)
    return records

def run():
    while True:
        for rec in fetch_quakes():
            p.produce(
                TOPIC,
                key=rec['id'],
                value=json.dumps(rec),
                callback=delivery_report
            )
        p.flush()
        time.sleep(10)

if __name__ == "__main__":
    run()

