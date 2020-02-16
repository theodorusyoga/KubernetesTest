FROM node:13.8.0-alpine3.10

EXPOSE 3000

RUN mkdir -p /usr/src/kubernetes-test
WORKDIR /usr/src/kubernetes-test

COPY package.json package.json
RUN npm install && npm cache clean --force

COPY . .

CMD [ "node", "index.js" ]