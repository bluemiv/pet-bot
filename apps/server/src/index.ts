import fs from 'fs';
import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

const apiPrefix = '/api/v1';
const voiceDir = `${__dirname}/resources/voice`;

app.use('/voice', express.static(voiceDir));

app.get(`${apiPrefix}/voice`, (req: Request, res: Response) => {
  const list = fs.readdirSync(voiceDir)?.filter((f) => /\.mp3$/.test(f));
  return res.send({
    count: list.length,
    results: list,
  });
});

app.get('/', function (req: Request, res: Response) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
