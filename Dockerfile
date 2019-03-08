FROM node:alpine

WORKDIR /usr/src/caquicoders

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3050

EXPOSE 9229

CMD [ "npm", "start" ]