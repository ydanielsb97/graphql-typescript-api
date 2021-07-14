"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySession = void 0;
var verifySession = function (req, res, next) {
    var token = req.cookies('token');
    // Verify ruta y token
    next();
};
exports.verifySession = verifySession;
