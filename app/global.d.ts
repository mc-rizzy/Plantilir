// types/global.d.ts

interface Window {
  FaceLandmarker: any;
  Hands: any;
  Camera: any;
  drawConnectors: any;
  drawLandmarks: any;
  HAND_CONNECTIONS: any;
  webkitSpeechRecognition?: typeof SpeechRecognition;
  FilesetResolver: any;
  DrawingUtils: any;
  FaceMesh: any;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onaudiostart?: () => void;
  onaudioend?: () => void;
  onsoundstart?: () => void;
  onsoundend?: () => void;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}