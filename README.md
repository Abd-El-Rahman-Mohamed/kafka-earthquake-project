# Kafka Earthquake Events

## Prerequisites
- Docker & Docker Compose
- Python 3.8+, pip
- Node.js & npm

## Setup
1. `docker-compose up -d`  
2. `scripts/create_topic.sh`  
3. `cd producer && pip install -r requirements.txt`  
4. `cd ../consumer_ws && pip install -r requirements.txt`  
5. `cd ../backend && npm install`  
6. `cd ../ui-producer && npm install`  
7. `cd ../ui-consumer && npm install`

## Running
1. **Control API**: `cd backend && npm start`  
2. **Producer**: via UI at http://localhost:3000 (ui‑producer)  
3. **Consumer WebSocket**: `cd consumer_ws && python consumer_ws.py`  
4. **Consumer UI**: `cd ui-consumer && npm start`  

Now open:
- Producer UI → configure & start/stop ingestion  
- Consumer UI → real‑time map, list, and chart  

