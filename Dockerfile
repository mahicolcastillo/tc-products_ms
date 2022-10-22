FROM node:16-alpine3.15

WORKDIR /home/app

COPY package.json ./
COPY tsconfig.json ./
COPY .env ./
COPY src ./src

RUN npm install typescript --g
RUN npm install
RUN npm run tsc

EXPOSE 3000

CMD ["node", "./dist/server/index.js"]