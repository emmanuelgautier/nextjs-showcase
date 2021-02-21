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
var next_seo_1 = require("next-seo");
var React = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var polyfills_1 = require("../polyfills");
require("../styles/globals.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps, _b = _a.locale, locale = _b === void 0 ? process.env.NEXT_LOCALE : _b, messages = _a.messages;
    return (<react_intl_1.IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      <next_seo_1.DefaultSeo />
      <Component {...pageProps}/>
    </react_intl_1.IntlProvider>);
}
/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales) {
    if (locales === void 0) { locales = ['en']; }
    if (!Array.isArray(locales)) {
        locales = [locales];
    }
    var langBundle;
    var locale;
    for (var i = 0; i < locales.length && !locale; i++) {
        locale = locales[i];
        switch (locale) {
            case 'en':
                langBundle = Promise.resolve().then(function () { return __importStar(require('../compiled-lang/en.json')); });
            case 'fr':
                langBundle = Promise.resolve().then(function () { return __importStar(require('../compiled-lang/fr.json')); });
                break;
            default:
                break;
        }
    }
    if (!langBundle) {
        return ['en', Promise.resolve().then(function () { return __importStar(require('../compiled-lang/en.json')); })];
    }
    return [locale, langBundle];
}
MyApp.getStaticProps = function (_a) {
    var nextLocale = _a.locale, localeParam = _a.params.locale;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, locale, messagePromise, _c, messages;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = getMessages(localeParam || nextLocale || process.env.NEXT_LOCALE), locale = _b[0], messagePromise = _b[1];
                    return [4 /*yield*/, Promise.all([polyfills_1.polyfill(locale), messagePromise])];
                case 1:
                    _c = _d.sent(), messages = _c[1];
                    return [2 /*return*/, {
                            locale: locale,
                            messages: messages.default,
                        }];
            }
        });
    });
};
exports.default = MyApp;
