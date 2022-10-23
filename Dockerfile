FROM node:14.18.1-alpine

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY scripts ./scripts
COPY src ./src
RUN ls -a
RUN npm install
# RUN npm run tsc

EXPOSE 3000

CMD ["npm","run","debug"]