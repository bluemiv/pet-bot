export const FACE_ID = {
  BLINK: "Blink",
  SMILE: "Smile",
  WINK: "Wink",
} as const;

export const FACE = [
  { id: FACE_ID.BLINK, label: "기본" },
  { id: FACE_ID.SMILE, label: "기쁨" },
  { id: FACE_ID.WINK, label: "윙크" },
] as const;
