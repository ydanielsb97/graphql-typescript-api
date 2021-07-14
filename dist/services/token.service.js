"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var variables_env_1 = require("../config/variables.env");
var generateToken = function (id) {
    return jsonwebtoken_1.default.sign({ id: id }, variables_env_1.SECRET_WORD, {
        expiresIn: 6000,
    });
};
exports.generateToken = generateToken;
var verifyToken = function (token) {
    var verify = token ? token : '';
    return jsonwebtoken_1.default.decode(verify);
};
exports.verifyToken = verifyToken;
