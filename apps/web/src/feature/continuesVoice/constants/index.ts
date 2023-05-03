const VOICE_PREFIX = "";
export const VOICE_TYPE = {
  NAME: "NAME",
} as const;

export const VOICE = {
  건우야: { path: "건우야.mp3", type: VOICE_TYPE.NAME },
  서규야: { path: "서규야.mp3", type: VOICE_TYPE.NAME },
  주령아: { path: "주령아.mp3", type: VOICE_TYPE.NAME },
  진웅아: { path: "진웅아.mp3", type: VOICE_TYPE.NAME },
  태홍아: { path: "태홍아.mp3", type: VOICE_TYPE.NAME },
  태흔아: { path: "태흔아.mp3", type: VOICE_TYPE.NAME },
  "기분은 어때?": { path: "기분은 어때?.mp3", type: VOICE_TYPE.NAME },
  "나는 밥을 먹었어": { path: "나는 밥을 먹었어.mp3", type: VOICE_TYPE.NAME },
  "나는 우울해": { path: "나는 우울해.mp3", type: VOICE_TYPE.NAME },
  "나는 행복해": { path: "나는 행복해.mp3", type: VOICE_TYPE.NAME },
  "단비랑 같이 게임하자": {
    path: "단비랑 같이 게임하자.mp3",
    type: VOICE_TYPE.NAME,
  },
  "단비랑 같이 축구하자": {
    path: "단비랑 같이 축구하자.mp3",
    type: VOICE_TYPE.NAME,
  },
  "단비랑 놀자": { path: "단비랑 놀자.mp3", type: VOICE_TYPE.NAME },
  "많이 힘들었니?": { path: "많이 힘들었니?.mp3", type: VOICE_TYPE.NAME },
  "많이 힘들었어?": { path: "많이 힘들었어?.mp3", type: VOICE_TYPE.NAME },
  "밥은 먹었니?": { path: "밥은 먹었니?.mp3", type: VOICE_TYPE.NAME },
  "배는 안고파?": { path: "배는 안고파?.mp3", type: VOICE_TYPE.NAME },
  "오늘은 기분이 좋아": {
    path: "오늘은 기분이 좋아.mp3",
    type: VOICE_TYPE.NAME,
  },
  "오늘은 뭐해?": { path: "오늘은 뭐해?.mp3", type: VOICE_TYPE.NAME },
} as const;
