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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_seo_1 = require("next-seo");
var head_1 = __importDefault(require("next/head"));
var React = __importStar(require("react"));
var react_intl_1 = require("react-intl");
function Layout(_a) {
    var title = _a.title, children = _a.children;
    var intl = react_intl_1.useIntl();
    return (<div className="flex flex-col items-center justify-center min-h-screen py-2">
      <head_1.default>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>
          {title ||
        intl.formatMessage({
            defaultMessage: 'SSG With Internationalization',
        })}
        </title>
      </head_1.default>

      <next_seo_1.NextSeo title={title}/>

      {children}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <react_intl_1.FormattedMessage defaultMessage="Made with"/> {'\u2764'} <react_intl_1.FormattedMessage defaultMessage="by"/> &nbsp;
        <a className="text-blue-500" href="https://www.emmanuelgautier.com?utm_source=next-showcase" target="_blank">
          Emmanuel Gautier
        </a>
      </footer>
    </div>);
}
exports.default = Layout;
