"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPlaceholder = void 0;
var react_1 = __importDefault(require("react"));
var getRandomInt = function (min, max) {
    return min + Math.floor(Math.random() * Math.floor(max - min));
};
exports.TextPlaceholder = react_1.default.memo(function (props) {
    var minLength = props.minLength, maxLength = props.maxLength;
    var placeholderLength = getRandomInt(minLength, maxLength);
    var whitespace = '&nbsp;'.repeat(placeholderLength);
    return (react_1.default.createElement("span", { className: "chonky-text-placeholder", dangerouslySetInnerHTML: { __html: whitespace } }));
});
//# sourceMappingURL=TextPlaceholder.js.map