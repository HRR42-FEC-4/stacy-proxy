FROM node:13


RUN mkdir /app


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build


CMD [ "node", "server/index.js" ]
