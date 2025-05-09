#!/usr/bin/env bash
# make executable: chmod +x scripts/create_topic.sh
docker-compose exec kafka \
  kafka-topics --bootstrap-server localhost:9092 \
               --create \
               --topic earthquake-events \
               --partitions 1 \
               --replication-factor 1
echo "Topic 'earthquake-events' created."

