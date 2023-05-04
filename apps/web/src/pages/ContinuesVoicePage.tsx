import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { Button, Radio, Section } from '@/components/atoms';

const ContinuesVoicePage = () => {
  const strength = useRef<number>(3);
  const [queue, setQueue] = useState<string[]>([]);
  const { isLoading, data } = useQuery([''], () => API.getVoiceList());

  if (isLoading) return <div>loading...</div>;
  const labels = Object.keys(data.results);

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
    const urls = queue.map((d) => {
      return `${serverUrl}/voice/${data.results[d][strength.current]}`;
    });

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
      <Section title="음성 듣기">
        {queue.length > 0 && (
          <div className="flex items-center gap-x-4">
            <div>{queue.join(' ')}</div>
            <Button onClick={play}>Play</Button>
            <Button onClick={() => setQueue([])}>Clear</Button>
          </div>
        )}
      </Section>
      <Section title="감정 조절" className="flex items-center gap-x-4">
        {[
          { label: '중립', value: 0 },
          { label: '슬픔', value: 1 },
          { label: '기쁨', value: 2 },
          { label: '분노', value: 3 },
        ].map(({ label, value }) => (
          <Radio
            name="strength"
            key={value}
            label={label}
            value={value}
            defaultChecked={strength.current === value}
            onChange={(event) => {
              strength.current = Number(event.target?.value);
            }}
          />
        ))}
      </Section>
      <Section title={`단어 (${labels.length}개)`} className="flex flex-wrap items-center gap-4">
        {labels.map((label: string, idx: number) => (
          <Button key={idx} onClick={() => setQueue(Array.from(new Set([...queue, label])))}>
            {label}
          </Button>
        ))}
      </Section>
    </div>
  );
};

export default ContinuesVoicePage;
