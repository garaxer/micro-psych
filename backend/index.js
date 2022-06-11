"use strict";
var _a;
exports.__esModule = true;
exports.handler = exports.app = void 0;
var serverless_express_1 = require("@vendia/serverless-express");
var express_1 = require("express");
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8081;
exports.app = express_1["default"]();
exports.app.get("/", function (req, res) {
    res.send("Craig's Counselling Toowoomba. Contact craig@craigscounselling.com for an appointment");
});
exports.app.get("/Matt", function (req, res) {
    res.send("Thanks Matt");
});
console.log("I am alive");
// app.listen(PORT, () => console.log("Listening on 8081"));
exports.handler = serverless_express_1["default"]({ app: exports.app });
