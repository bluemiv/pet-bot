import fs from 'fs';
import cors from 'cors';
import path from 'path';
import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

const apiPrefix = '/api/v1';
const voiceDir = `${__dirname}/resources/voice`;

const whiteList = [
  'http://client.local.danbi:3000',
  'http://localhost:3000',
  'http://localhost:4000',
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || (origin && whiteList.indexOf(origin) !== -1)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use('/voice', express.static(voiceDir));

app.get(`${apiPrefix}/voice`, (req: Request, res: Response) => {
  const names = fs.readdirSync(path.join(voiceDir, 'name'))?.filter((f) => /\.mp3$/.test(f));
  const actions = fs.readdirSync(path.join(voiceDir, 'action'))?.filter((f) => /\.mp3$/.test(f));
  return res.send({
    results: {
      names,
      actions,
    },
  });
});

app.get('/', function (req: Request, res: Response) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
