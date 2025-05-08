import asyncio, json
from confluent_kafka import Consumer
import websockets

TOPIC = "earthquake-events"
KAFKA_CONF = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'eq-consumer-group',
    'auto.offset.reset': 'earliest'
}

c = Consumer(KAFKA_CONF)
c.subscribe([TOPIC])

clients = set()

async def ws_handler(ws, path):
    clients.add(ws)
    try:
        await ws.wait_closed()
    finally:
        clients.remove(ws)

async def broadcast():
    while True:
        msg = c.poll(1.0)
        if msg and not msg.error():
            data = msg.value().decode('utf-8')
            for ws in clients:
                await ws.send(data)
        await asyncio.sleep(0.1)

async def main():
    server = await websockets.serve(ws_handler, 'localhost', 6789)
    await broadcast()

if __name__ == "__main__":
    asyncio.run(main())

