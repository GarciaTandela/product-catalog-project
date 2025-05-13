FROM node:22.14.0-alpine

WORKDIR /backend

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

ENV DB_CONNECTION=mongodb://mongodb:27017/productcatalog

CMD ["npm", "run", "dev"]