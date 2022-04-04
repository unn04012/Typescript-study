import express, { Request, Response, NextFunction } from 'express';
import { dataSource } from './entities';
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
(async () => {
  try {
    const result = await dataSource.initialize();
    if (result) console.log('Database connect successfully');
  } catch (err) {
    console.log(err);
  }
})();

const app = new App().application;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world');
});
app.listen(4000, () => console.log('4000번 실행중'));
