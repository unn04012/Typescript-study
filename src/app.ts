import express, { Request, Response, NextFunction } from 'express';
import { dataSource } from './DBConnect';
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world');
});
dataSource
  .initialize()
  .then(() => console.log('Database connect successfully'))
  .catch((err) => console.log(err));
app.listen(4000, () => console.log('4000번 실행중'));
