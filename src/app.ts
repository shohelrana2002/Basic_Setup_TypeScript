import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();
// const port = 3000;
// Parser
app.use(cors());
app.use(express.json());
// Application Routes
app.use('/api/v1/students', StudentRoutes);
const getAController = (req: Request, res: Response) => {
  res.send(`My Fist TypeScript Project`);
};

app.get('/', getAController);

export default app;
