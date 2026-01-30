
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSecurityAdvice = async (history: ChatMessage[]) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the "Daddy Tech Solutions" AI Assistant. 
    You are an expert in security systems (CCTV, Alarms, Access Control).
    Your goal is to provide helpful, professional, and friendly advice to potential customers.
    
    If they ask about CCTV: Mention high definition, night vision, and mobile access.
    If they ask about Alarms: Emphasize reliability, smart sensors, and fast notifications.
    If they ask about pricing or scheduling: Advise them to fill out the contact form or call +1 (555) 789-1234.
    
    Keep responses concise but informative. Always maintain a tone of safety and expertise.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our support team directly!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI consultant is currently offline. Please call us at +1 (555) 789-1234 for immediate assistance.";
  }
};
