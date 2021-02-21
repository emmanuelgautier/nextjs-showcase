"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var glob_1 = require("glob");
var http_1 = require("http");
var accepts_1 = __importDefault(require("accepts"));
var next_1 = __importDefault(require("next"));
var polyfills_1 = require("./polyfills");
var crypto_1 = __importDefault(require("crypto"));
// Get the supported languages by looking for translations in the `lang/` dir.
var supportedLanguages = glob_1.sync('./compiled-lang/*.json').map(function (f) {
    return path_1.basename(f, '.json');
});
var SUPPORTED_LOCALES = ['en', 'fr'];
var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = next_1.default({ dev: dev });
var handle = app.getRequestHandler();
Promise.all(__spreadArrays([app.prepare()], SUPPORTED_LOCALES.map(polyfills_1.polyfill))).then(function () {
    http_1.createServer(function (req, res) {
        var accept = accepts_1.default(req);
        var locale = process.env.NEXT_LOCALE || accept.language(supportedLanguages) || 'en';
        req.locale = locale;
        var nonce = crypto_1.default.randomBytes(20).toString('hex');
        req.nonce = nonce;
        // TODO: This will blow up other next inline JS but next.js should prob fix this
        // res.setHeader('Content-Security-Policy', `script-src 'nonce-${nonce}'`);
        handle(req, res);
    }).listen(port, function () {
        console.log("> Ready on http://localhost:" + port);
    });
});
