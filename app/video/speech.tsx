"use client";

import { useEffect, useRef, useState } from "react";

export function useSpeechToText({
  silenceMs = 2000,
  wakeWord = "hey app",
} = {}) {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [awake, setAwake] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset the silence timer
  const resetSilenceTimer = () => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

    silenceTimerRef.current = setTimeout(() => {
      if (listening && recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }, silenceMs);
  };

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not supported.");
      return;
    }

    const recognition: SpeechRecognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let combined = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        combined += event.results[i][0].transcript.toLowerCase();
      }

      // Wake word detection
      if (!awake && combined.includes(wakeWord.toLowerCase())) {
        setAwake(true);
        setText("");
        return;
      }

      if (awake) {
        setText(combined);
      }

      resetSilenceTimer();
    };

    recognition.onend = () => {
      // Automatically restart if still listening
      if (listening && recognitionRef.current) {
        recognitionRef.current.start();
      } else {
        setListening(false);
        setAwake(false);
      }
    };

    recognitionRef.current = recognition;
  }, [awake, listening, silenceMs, wakeWord]);

  const startListen = () => {
    if (!recognitionRef.current || listening) return;

    setAwake(false);
    setText("");
    recognitionRef.current.start();
    resetSilenceTimer();
    setListening(true);
  };

  const stopListen = () => {
    recognitionRef.current?.stop();
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    setListening(false);
    setAwake(false);
  };

  return { text, listening, awake, startListen, stopListen };
}
