import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Its Working from backend' });
});


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

