#!/bin/bash

docker-compose up --build -d
sleep 5
docker-compose exec database bash /save/fill_db.sh
