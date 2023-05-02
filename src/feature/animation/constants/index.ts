export const FACE_ID = {
  BLINK: "Blink",
  SMILE: "Smile",
  WINK: "Wink",
  WINK_KEYFRAME: "WinkKeyFrame",
  DARAE: "Darae",
} as const;

export const FACE = [
  { id: FACE_ID.BLINK, label: "기본" },
  { id: FACE_ID.SMILE, label: "기쁨" },
  { id: FACE_ID.WINK, label: "윙크" },
  { id: FACE_ID.WINK_KEYFRAME, label: "윙크(with keyframe)" },
  { id: FACE_ID.DARAE, label: "다래" },
] as const;
