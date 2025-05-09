# Kafka Earthquake Events

## Prerequisites
- Docker & Docker Compose
- Python 3.8+, pip
- Node.js & npm

## Setup
1. `sudo docker-compose up -d`  
2. `sudo scripts/create_topic.sh`  
3. `cd producer && pip install -r requirements.txt --break-system-packages`  
4. `cd ../consumer_ws && pip install -r requirements.txt --break-system-packages`  
5. `cd ../backend && sudo npm install`  
6. `cd ../ui-producer && sudo npm install`  
7. `cd ../ui-consumer && sudo npm install`

## Running
1. **Control API**: `cd ../backend && npm start`  
2. **Producer UI**: `cd ../ui-producer && npm start`  
3. **Producer**: via UI at http://localhost:3000 (ui‑producer)  
4. **Consumer WebSocket**: `cd ../consumer_ws && python consumer_ws.py`  
5. **Consumer UI**: `cd ../ui-consumer && sudo npm install react-scripts && npm start`  

Now open:
- Producer UI → configure & start/stop ingestion  
- Consumer UI → real‑time map, list, and chart  

