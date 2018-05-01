FROM node:8.9.4-alpine

RUN apk --update --no-cache add tzdata bash curl \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./app/package.json /usr/src/app/

RUN npm install --production --registry=https://registry.npm.taobao.org

COPY ./app /usr/src/app
COPY wait-for-it.sh /

# RUN npm run build

CMD /wait-for-it.sh db:3306 -- npm run docker
