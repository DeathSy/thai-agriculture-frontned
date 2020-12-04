FROM node:15.3.0-alpine3.12

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install

COPY . /app

EXPOSE 3000

CMD [ "yarn", "start" ]
