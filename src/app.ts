import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { useContainer as routingContainer, createExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

import { UserController } from './controller/user/UserController';

import { initTypeORMConnection } from './DBConnect';
import { useContainer as ormContainer } from 'typeorm';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
  }
  public async createServer() {
    try {
      routingContainer(Container);
      ormContainer(Container);
      await initTypeORMConnection();
      this.app = createExpressServer({ controllers: [UserController] });
      this.app.listen(4000, () => console.log('4000번 실행중'));
    } catch (err) {
      console.log(err);
    }
  }
}

try {
  new App().createServer();
} catch (err) {
  console.log(err);
}
