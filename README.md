#1. Create Network if you didn't create it for the backend.
docker network create myNet

#2. Run the Front End.
docker build -t drones-simulator-ui:v1 .
docker run --network myNet -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm drones-simulator-ui:v1

#3. Download the backend traffic-monitor module from https://github.com/cscib/traffic-monitor

Assumptions:

