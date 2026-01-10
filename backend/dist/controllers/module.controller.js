"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModule = exports.createModule = exports.getModules = void 0;
const getModules = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'success', data: [] });
    }
    catch (error) {
        next(error);
    }
};
exports.getModules = getModules;
const createModule = async (req, res, next) => {
    try {
        res.status(201).json({ status: 'success', data: null });
    }
    catch (error) {
        next(error);
    }
};
exports.createModule = createModule;
const getModule = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'success', data: null });
    }
    catch (error) {
        next(error);
    }
};
exports.getModule = getModule;
