"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const error_1 = require("./error");
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(', ');
            return next(new error_1.AppError(errorMessage, 400));
        }
        next();
    };
};
exports.validate = validate;
