"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfill = void 0;
var should_polyfill_1 = require("@formatjs/intl-getcanonicallocales/should-polyfill");
var should_polyfill_2 = require("@formatjs/intl-pluralrules/should-polyfill");
var should_polyfill_3 = require("@formatjs/intl-numberformat/should-polyfill");
var should_polyfill_4 = require("@formatjs/intl-datetimeformat/should-polyfill");
var should_polyfill_5 = require("@formatjs/intl-relativetimeformat/should-polyfill");
/**
 * Dynamically polyfill Intl API & its locale data
 * @param locale locale to polyfill
 */
function polyfill(locale) {
    if (locale === void 0) { locale = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var dataPolyfills, lang;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataPolyfills = [];
                    if (!should_polyfill_1.shouldPolyfill()) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(
                        /* webpackChunkName: "intl-getcanonicallocales" */ '@formatjs/intl-getcanonicallocales/polyfill')); })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!should_polyfill_2.shouldPolyfill()) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(
                        /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/polyfill')); })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (Intl.PluralRules.polyfilled) {
                        lang = locale.split('-')[0];
                        switch (lang) {
                            default:
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/en')); }));
                                break;
                            case 'fr':
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/fr')); }));
                                break;
                        }
                    }
                    if (!should_polyfill_3.shouldPolyfill()) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(
                        /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/polyfill')); })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (Intl.NumberFormat.polyfilled) {
                        switch (locale) {
                            default:
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/en')); }));
                                break;
                            case 'fr':
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/fr')); }));
                                break;
                        }
                    }
                    if (!should_polyfill_4.shouldPolyfill()) return [3 /*break*/, 8];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(
                        /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/polyfill')); })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (Intl.DateTimeFormat.polyfilled) {
                        dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require('@formatjs/intl-datetimeformat/add-all-tz')); }));
                        switch (locale) {
                            default:
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/en')); }));
                                break;
                            case 'fr':
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/fr')); }));
                                break;
                        }
                    }
                    if (!should_polyfill_5.shouldPolyfill()) return [3 /*break*/, 10];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(
                        /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/polyfill')); })];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (Intl.RelativeTimeFormat.polyfilled) {
                        switch (locale) {
                            default:
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/en')); }));
                                break;
                            case 'fr':
                                dataPolyfills.push(Promise.resolve().then(function () { return __importStar(require(
                                /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/fr')); }));
                                break;
                        }
                    }
                    return [4 /*yield*/, Promise.all(dataPolyfills)];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.polyfill = polyfill;
