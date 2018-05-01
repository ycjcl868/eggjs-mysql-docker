'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // app
  config.cluster = {
    listen: {
      port: +process.env.WEB_PORT || 7001,
      // not write localhost/127.0.0.1
      hostname: '0.0.0.0',
    },
  };

  // mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: process.env.MYSQL_HOST || '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: process.env.MYSQL_ROOT_PASSWORD || 'test',
      // 数据库名
      database: process.env.MYSQL_DATABASE || 'test',
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525154533472_1513';

  // add your config here
  config.middleware = [];
  return config;
};
