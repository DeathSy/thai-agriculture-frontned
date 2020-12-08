FROM node:15.3.0-alpine3.12 as builder

ARG API_ENDPOINT
ENV REACT_APP_API_ENDPOINT=${API_ENDPOINT}

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install && yarn build

FROM nginx:1.19.5-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
