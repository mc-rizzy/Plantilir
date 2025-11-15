
import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMAPI });

  // let prompt = 'make a short catchphrase about gooning. Return just the phrase.';
  let prompt = await request.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt.prompt,
  });

  let geminiAnswer = response.text;

  return new Response(JSON.stringify({ geminiAnswer }), {
      status: 200,
    });
}