#!/bin/bash

for module in {katie,dave,stacy}-service
do
	cd $module
	npm i
	npm run build
	cd ..
done

BUCKET=fec4

aws s3 cp katie-service/client/public/bundle.js s3://${BUCKET}/reviews.js
aws s3 cp dave-service/public/dist/bundle.js s3://${BUCKET}/product.js
aws s3 cp stacy-service/public/bundle.js s3://${BUCKET}/carousel.js

aws s3 cp dave-service/public/styles.css s3://${BUCKET}/product/styles.css
aws s3 cp katie-service/client/public/style.css s3://${BUCKET}/reviews/style.css
aws s3 cp stacy-service/client/src/styles.css s3://${BUCKET}/carousel/styles.css
