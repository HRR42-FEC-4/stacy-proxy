FROM node:13


RUN mkdir /app


WORKDIR /app


COPY . .


RUN rm -rf node_modules


RUN npm install


RUN npm run build


CMD [ "node", "server/app.js" ]
