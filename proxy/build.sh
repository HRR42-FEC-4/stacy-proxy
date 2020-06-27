#!/bin/bash

cp ../public/index.html .
cp ../public/*.jpg .
docker build -t proxy .

docker tag proxy:latest 404330040211.dkr.ecr.us-east-1.amazonaws.com/proxy:latest
docker push 404330040211.dkr.ecr.us-east-1.amazonaws.com/proxy:latest
