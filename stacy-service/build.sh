#!/bin/bash

docker build -t carousel .

docker tag carousel:latest 404330040211.dkr.ecr.us-east-1.amazonaws.com/carousel:latest
docker push 404330040211.dkr.ecr.us-east-1.amazonaws.com/carousel:latest
