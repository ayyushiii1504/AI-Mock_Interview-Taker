import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


// routes/interviewRoutes.js

router.post("/start", async (req, res) => {
  try {
    const { userId, field } = req.body;

    if (!userId || !field) {
      return res.status(400).json({ error: "User ID and field are required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate 5 concise and realistic technical interview questions for a ${field} position. Number each question.`;

    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }]
    });

    const response = result.response;

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No questions received from AI");
    }

    const questionsText = response.candidates[0].content.parts[0].text;

    // ✅ Clean and extract each question into a list
    const questions = questionsText
      .split("\n")
      .map(line => line.trim())
      .filter(line => line) // Remove empty lines
      .map(line => line.replace(/^\d+\.\s*/, "")); // Remove "1. ", "2. " from start

    res.json({ userId, questions });
  } catch (error) {
    console.error("Error starting interview:", error);
    res.status(500).json({ error: error.message });
  }
});



router.post("/submit", async (req, res) => {
  try {
    const { userId, question, answer } = req.body;


    if (!userId || !question || !answer) {
      return res.status(400).json({ error: "User ID, question, and answer are required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

   
    const feedbackPrompt = `Evaluate the following interview answer and provide concise feedback (within 2-3 sentences). Keep it constructive and to the point.\n\nQuestion: ${question}\nAnswer: ${answer}\n\nGive a short response.`;

    const result = await model.generateContent({ contents: [{ parts: [{ text: feedbackPrompt }] }] });
    const response = result.response;

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No feedback received from AI");
    }

    const feedback = response.candidates[0].content.parts[0].text;

 
    res.json({ success: true, feedback });

  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/feedback", async (req, res) => {
  try {
    const { userId, responses } = req.body;

    if (!userId || !responses || Object.keys(responses).length === 0) {
      return res.status(400).json({ error: "User ID and responses are required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Simplified prompt for brief, concise, and clear feedback
    const prompt = `
You're an expert interview evaluator. Based on the candidate's overall responses below, provide concise and clear feedback to help them improve their interview performance. Limit your response to **max 5 bullet points**. Avoid repeating individual question feedback. Focus on general improvements, strengths, and brief suggestions.

### Candidate's Responses:
${Object.entries(responses).map(
  ([question, answer], index) =>
    `Q${index + 1}: ${question}\nA${index + 1}: ${answer}`
).join("\n\n")}
`;

    const result = await model.generateContent({ contents: [{ parts: [{ text: prompt }] }] });
    const response = result.response;

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No feedback received from AI");
    }

    const feedback = response.candidates[0].content.parts[0].text;

    res.json({ success: true, feedback });

  } catch (error) {
    console.error("Error generating feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;

