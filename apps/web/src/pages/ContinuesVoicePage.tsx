import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { Button } from '@/components/atoms';

const ContinuesVoicePage = () => {
  const [queue, setQueue] = useState<string[]>([]);
  const { isLoading, data } = useQuery([''], () => API.getVoiceList());

  if (isLoading) return <div>loading...</div>;
  const { names, actions } = data.results;

  const continuesPlay = (currentIdx: number, audioSourceList: AudioBufferSourceNode[]) => {
    const audioSource = audioSourceList[currentIdx];
    audioSource.onended = (event) => {
      console.log(`${event.timeStamp}ms`);
      const nextIdx = currentIdx + 1;
      if (audioSourceList.length <= nextIdx) return console.log('end');
      continuesPlay(nextIdx, audioSourceList);
    };
    audioSource.start();
  };

  const play = async () => {
    const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;
    if (!serverUrl) return;
    const urls = queue.map((d) => `${serverUrl}/voice/${d}`);

    const audioContext = new AudioContext();

    // 미리 음성 파일을 모두 가지고 온 다음 audioBufferSource를 생성
    const audioSourceList = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(buffer);

        const source = audioContext.createBufferSource();
        // @ts-ignore
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        return source;
      })
    );

    continuesPlay(0, audioSourceList);
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
