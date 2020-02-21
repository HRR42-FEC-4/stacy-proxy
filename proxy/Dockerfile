FROM node:13


RUN mkdir /app


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY index.js .

COPY index.html /var/www/hart/
COPY headnav.jpg /var/www/hart/


EXPOSE 3000


ENV STATIC_DIR /var/www/hart


CMD [ "node", "index.js" ]
