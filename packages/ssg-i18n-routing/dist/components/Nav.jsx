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
var React = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var link_1 = __importDefault(require("next/link"));
function Nav() {
    return (<nav>
      <li>
        <link_1.default href="/">
          <a>
            <react_intl_1.FormattedMessage defaultMessage="Home"/>
          </a>
        </link_1.default>
      </li>
      <li>
        <link_1.default href="/about">
          <a>
            <react_intl_1.FormattedMessage defaultMessage="About"/>
          </a>
        </link_1.default>
      </li>

      <style jsx>{"\n        nav {\n          display: flex;\n        }\n        li {\n          list-style: none;\n          margin-right: 1rem;\n        }\n      "}</style>
    </nav>);
}
exports.default = Nav;
