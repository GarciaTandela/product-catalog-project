FROM node:22.14.0-alpine

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENV NEXT_PUBLIC_API_URL=http://localhost:3000

CMD [ "npm", "run", "dev" ]