import { Request, Response, NextFunction } from 'express';
import { getDb } from '../config/firebase';
import * as admin from 'firebase-admin';
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');
const xlsx = require('xlsx');

export const getQuizzes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const snapshot = await db.collection('quizzes').orderBy('createdAt', 'desc').get();
        const quizzes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json({ status: 'success', data: quizzes });
    } catch (error) {
        next(error);
    }
};

export const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(201).json({ status: 'success', message: 'Mock Mode' });

        const { title, description, questions } = req.body;

        // Validation
        if (!title || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ status: 'error', message: 'Invalid quiz data. Title and at least one question required.' });
        }

        const newQuiz = {
            title,
            description: description || '',
            questions: questions.map((q: any) => ({
                text: q.text,
                options: q.options,
                correct: Number(q.correct),
                difficulty: q.difficulty || 'Medium'
            })),
            difficulty: 'Mixed',
            createdAt: new Date().toISOString(),
            authorId: req.user?.uid || 'anonymous',
            authorName: req.user?.name || 'Contributor'
        };

        const docRef = await db.collection('quizzes').add(newQuiz);

        res.status(201).json({ status: 'success', data: { id: docRef.id, ...newQuiz } });
    } catch (error: any) {
        console.error("Create Quiz Error:", error);
        res.status(500).json({
            status: 'error',
            message: `Save Failed: ${error.message}`
        });
    }
};

export const submitResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', message: 'Mock Mode' });

        const { score, total, details, quizId } = req.body;

        const result = {
            userId: req.user?.uid,
            userName: req.user?.email?.split('@')[0] || 'Unknown',
            quizId,
            score,
            total,
            details,
            timestamp: new Date().toISOString()
        };

        // Check if user already submitted this quiz
        let existingResultId: string | null = null;
        if (quizId) {
            const existingSnapshot = await db.collection('results')
                .where('userId', '==', req.user?.uid)
                .where('quizId', '==', quizId)
                .limit(1)
                .get();

            if (!existingSnapshot.empty) {
                existingResultId = existingSnapshot.docs[0].id;
            }
        }

        const batch = db.batch();

        // 1. Save Result (Create or Update)
        const resultRef = existingResultId
            ? db.collection('results').doc(existingResultId)
            : db.collection('results').doc();

        if (existingResultId) {
            batch.update(resultRef, { ...result, timestamp: new Date().toISOString() });
        } else {
            batch.set(resultRef, result);
        }

        // 2. Increment Quiz Counter (only if NEW submission)
        if (quizId && !existingResultId) {
            const quizRef = db.collection('quizzes').doc(quizId);
            batch.update(quizRef, {
                submissionCount: admin.firestore.FieldValue.increment(1)
            });
        }

        await batch.commit();

        res.status(201).json({ status: 'success', data: { id: resultRef.id, ...result } });
    } catch (error) {
        next(error);
    }
};

export const getQuizResults = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const { id } = req.params; // Quiz ID

        const snapshot = await db.collection('results')
            .where('quizId', '==', id)
            .get();

        const results = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        console.log(`[QuizResults] Fetched ${results.length} results for quiz ${id}`);

        res.status(200).json({ status: 'success', data: results });
    } catch (error) {
        next(error);
    }
};

export const getMyResults = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const userId = req.user?.uid;
        if (!userId) return res.status(400).json({ status: 'error', message: 'User ID required' });

        const snapshot = await db.collection('results')
            .where('userId', '==', userId)
            .get();

        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ status: 'success', data: results });
    } catch (error) {
        next(error);
    }
};

export const generateQuizFromDocument = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            return res.status(400).json({ status: 'error', message: 'No file uploaded' });
        }

        // Handle Excel File (Deterministic Import)
        if (
            req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            req.file.originalname.endsWith('.xlsx')
        ) {
            try {
                const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                // Parse to JSON
                const rows: any[] = xlsx.utils.sheet_to_json(sheet);

                if (!rows || rows.length === 0) {
                    return res.status(400).json({ status: 'error', message: 'Excel file is empty or could not be parsed' });
                }

                const questions = rows.map((row: any) => {
                    // Extract SOLN index
                    // Format examples: "C) Binary", "C) 4", "B)AND"
                    const solnRaw = row['SOLN'] ? String(row['SOLN']).trim() : '';
                    let correctIndex = 0;

                    if (solnRaw.toUpperCase().startsWith('A')) correctIndex = 0;
                    else if (solnRaw.toUpperCase().startsWith('B')) correctIndex = 1;
                    else if (solnRaw.toUpperCase().startsWith('C')) correctIndex = 2;
                    else if (solnRaw.toUpperCase().startsWith('D')) correctIndex = 3;

                    return {
                        text: row['QUES'],
                        options: [
                            String(row['A'] || ''),
                            String(row['B'] || ''),
                            String(row['C'] || ''),
                            String(row['D'] || '')
                        ],
                        correct: correctIndex,
                        difficulty: 'Medium' // Default
                    };
                }).filter((q: any) => q.text && q.options.some((o: string) => o)); // Basic validation

                return res.status(200).json({ status: 'success', data: questions });

            } catch (excelError: any) {
                console.error("Excel Parsing Error:", excelError);
                return res.status(400).json({ status: 'error', message: 'Failed to parse Excel file. Ensure columns are QUES, A, B, C, D, SOLN.' });
            }
        }

        let textContent = '';

        // 1. Parse File
        if (req.file.mimetype === 'application/pdf') {
            const data = await pdf(req.file.buffer);
            textContent = data.text;
        } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const result = await mammoth.extractRawText({ buffer: req.file.buffer });
            textContent = result.value;
        } else {
            // Fallback for text files
            textContent = req.file.buffer.toString('utf-8');
        }

        if (!textContent || textContent.length < 50) {
            return res.status(400).json({ status: 'error', message: 'File content too short or unreadable' });
        }

        // 2. Call Gemini AI
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.warn("Missing GEMINI_API_KEY, returning mock questions.");
            return res.status(200).json({
                status: 'success',
                data: [
                    { text: "Mock Question 1 from File?", options: ["A", "B", "C", "D"], correct: 0, difficulty: "Medium" },
                    { text: "Mock Question 2 from File?", options: ["Yes", "No", "Maybe", "So"], correct: 1, difficulty: "Entry" }
                ]
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            You are an expert educational assistant suitable for generating quizzes for hardware engineering students.
            Analyze the following text and generate 5 multiple-choice questions.
            
            Return ONLY a valid JSON array of objects. Do not include markdown formatting (like \`\`\`json).
            Format:
            [
                {
                    "text": "Question text here?",
                    "options": ["Option A", "Option B", "Option C", "Option D"],
                    "correct": 0, // Index of correct option (0-3)
                    "difficulty": "Medium" // Entry, Medium, or Senior
                }
            ]

            Text Content:
            ${textContent.substring(0, 15000)} // Limit context to avoid token limits
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Cleanup markdown if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();

        let questions = [];
        try {
            questions = JSON.parse(jsonStr);
        } catch (e) {
            console.error("AI Parsing Error", text);
            return res.status(500).json({ status: 'error', message: 'Failed to parse AI response' });
        }

        res.status(200).json({ status: 'success', data: questions });

    } catch (error) {
        console.error("Quiz Gen Error:", error);
        next(error);
    }
};
