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
  const files = fs.readdirSync(voiceDir)?.filter((f) => /\.mp3$/.test(f));
  const results = files.reduce(
    (acc: { [key: string]: { [key: string]: string } }, filename: string) => {
      const [name, strength] = filename.split(/\$s|\.mp3/);
      const key = name.replace(/\$q/g, '?').replace(/_/g, ' ');
      if (!acc[key]) {
        return { ...acc, [key]: { [strength]: filename } };
      }
      return {
        ...acc,
        [key]: { ...acc[key], [strength]: filename },
      };
    },
    {}
  );
  console.log(results);

  return res.send({
    results: results,
  });
});

app.get('/', function (req: Request, res: Response) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
