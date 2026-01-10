"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const module_routes_1 = __importDefault(require("./module.routes"));
const quiz_routes_1 = __importDefault(require("./quiz.routes"));
const simulation_routes_1 = __importDefault(require("./simulation.routes"));
const router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
router.use('/modules', module_routes_1.default);
router.use('/quizzes', quiz_routes_1.default);
router.use('/simulation', simulation_routes_1.default);
exports.default = router;
