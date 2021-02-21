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
var Layout_1 = __importDefault(require("../components/Layout"));
function Home() {
    var intl = react_intl_1.useIntl();
    return (<Layout_1.default title={intl.formatMessage({
        defaultMessage: 'Home',
    })}>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <react_intl_1.FormattedMessage defaultMessage="Welcome to"/>{' '}
          <a className="text-blue-600" href="https://nextjs.org?utm_source=next-showcase" target="_blank" rel="noopener noreferrer">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <react_intl_1.FormattedMessage defaultMessage="A Showcase for Static Site Generation (SSG) in multiple languages"/>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="https://nextjs.org/docs" className="p-6 mx-2 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">
              <react_intl_1.FormattedMessage defaultMessage="Blog Post"/> &rarr;
            </h3>
            <p className="mt-4 text-xl">
              <react_intl_1.FormattedMessage defaultMessage="More explanations on how it works."/>
            </p>
          </a>

          <a href="https://nextjs.org/docs" className="p-6 mx-2 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">
              <react_intl_1.FormattedMessage defaultMessage="Code"/> &rarr;
            </h3>
            <p className="mt-4 text-xl">
              <react_intl_1.FormattedMessage defaultMessage="All the code with next and react-intl."/>
            </p>
          </a>
        </div>
      </main>
    </Layout_1.default>);
}
exports.default = Home;
