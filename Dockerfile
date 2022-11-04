FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i -g typescript && npm install

COPY . .

RUN cd fe && npm run build

RUN cd ../

EXPOSE 1234

CMD ["npm", "start"]