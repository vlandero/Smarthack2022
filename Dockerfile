FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i -g typescript && npm install

COPY . .

EXPOSE 1234

CMD ["npm", "start"]