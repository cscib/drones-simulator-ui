#1. Run the Front End.
docker build -t drones-simulator-ui:v1 .
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm drones-simulator-ui:v1

#2. To open the simulation UI:
http://localhost:4201/

#3. Download the backend traffic-monitor module from https://github.com/cscib/traffic-monitor

Assumptions:

