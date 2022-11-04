FROM node:16-alpine3.15

WORKDIR /app

COPY package.json .

RUN npm i -g typescript && npm install

COPY . .

RUN cd fe && npm i && npx react-scripts build

RUN cd ../

EXPOSE 1234

CMD ["npm", "start"]