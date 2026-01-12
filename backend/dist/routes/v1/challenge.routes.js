"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenge_controller_1 = require("../../controllers/challenge.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', challenge_controller_1.getAllChallenges);
router.get('/:id', challenge_controller_1.getChallengeById);
// Protected routes
router.use(auth_1.protect);
router.post('/', challenge_controller_1.createChallenge);
exports.default = router;
