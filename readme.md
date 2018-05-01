# eggjs-mysql-docker

## Requirements

- docker
- docker-compose

## Settings

### docker-compose.yml

### .env
modify the settings

```sh
WEB_PORT=3014
MYSQL_HOST=db
MYSQL_ROOT_PASSWORD=your_passwd
MYSQL_DATABASE=test
EGG_SERVER_ENV=prod
NODE_ENV=production
```

### db/test.sql
1. change `db/test.sql` to your sql file.

1. modify the `db/Dockfile`

```sh
FROM mysql:5.6

ADD test.sql /docker-entrypoint-initdb.d
```

## Deploy && Usage

```sh
# start
$ docker-compose up -d

# stop
$ docker-compose down

# remove
$ docker-compose down -v
```

### Snapshot
access `http://localhost:3014`

![](https://user-images.githubusercontent.com/13595509/39465213-b35c6518-4d54-11e8-9f99-ebe4f8dd82e5.png)
