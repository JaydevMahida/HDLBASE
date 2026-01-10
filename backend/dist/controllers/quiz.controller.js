"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuiz = exports.getQuizzes = void 0;
const getQuizzes = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'success', data: [] });
    }
    catch (error) {
        next(error);
    }
};
exports.getQuizzes = getQuizzes;
const createQuiz = async (req, res, next) => {
    try {
        res.status(201).json({ status: 'success', data: null });
    }
    catch (error) {
        next(error);
    }
};
exports.createQuiz = createQuiz;
