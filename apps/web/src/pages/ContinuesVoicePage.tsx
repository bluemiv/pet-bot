import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { Button } from '@/components/atoms';

const ContinuesVoicePage = () => {
  const [queue, setQueue] = useState<string[]>([]);
  const { isLoading, data } = useQuery([''], () => API.getVoiceList());

  if (isLoading) return <div>loading...</div>;
  const { names, actions } = data.results;

  const continuesPlay = (currentIdx: number, urls: string[]) => {
    const audio = document.createElement('audio');
    audio.src = urls[currentIdx];
    audio.onended = (time) => {
      console.log(`${time.timeStamp}ms`);
      const nextIdx = currentIdx + 1;
      if (urls.length <= nextIdx) return console.log('end');
      continuesPlay(nextIdx, urls);
    };
    audio.play();
  };

  const play = () => {
    const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;
    if (!serverUrl) return;
    const urls = queue.map((d) => `${serverUrl}/voice/${d}`);

    continuesPlay(0, urls);
  };

  return (
    <div className="w-viewer h-viewer m-auto flex flex-col gap-y-6">
      {queue.length > 0 && (
        <div className="flex items-center gap-x-4">
          <div>
            {queue
              .map((d) =>
                d
                  .replace(/\$q/g, '?')
                  .replace(/[a-zA-Z]+\//g, '')
                  .replace('.mp3', '')
              )
              .join(' ')}
          </div>
          <Button onClick={play}>Play</Button>
          <Button onClick={() => setQueue([])}>Clear</Button>
        </div>
      )}
      <div className="flex flex-col gap-y-4">
        <div className="font-bold">이름 ({names.length}개)</div>
        <div className="flex flex-wrap items-center gap-4">
          {names.map((name: string, idx: number) => (
            <Button
              key={idx}
              onClick={() => setQueue(Array.from(new Set([...queue, `name/${name}`])))}
            >
              {name.replace(/\$q/g, '?')}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="font-bold">행위 ({actions.length}개)</div>
        <div className="flex flex-wrap items-center gap-4">
          {actions.map((action: string, idx: number) => (
            <Button
              key={idx}
              onClick={() => setQueue(Array.from(new Set([...queue, `action/${action}`])))}
            >
              {action.replace(/\$q/g, '?')}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuesVoicePage;
