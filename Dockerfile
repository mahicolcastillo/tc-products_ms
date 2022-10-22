FROM node:16-alpine3.15

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN ls -a
RUN npm install
# RUN npm run tsc

EXPOSE 3000

CMD ["npm","run","debug"]