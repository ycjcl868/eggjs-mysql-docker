'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const list = await this.app.mysql.select('test');
    this.ctx.body = JSON.stringify(list);
  }
}

module.exports = HomeController;
