"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var react_1 = __importDefault(require("react"));
exports.ErrorMessage = react_1.default.memo(function (props) {
    var message = props.message, bullets = props.bullets;
    var bulletList = null;
    if (bullets && bullets.length > 0) {
        var items = [];
        for (var i = 0; i < bullets.length; ++i) {
            items.push(react_1.default.createElement("li", { key: "error-bullet-" + i }, bullets[i]));
        }
        bulletList = react_1.default.createElement("ul", null, items);
    }
    return (react_1.default.createElement("div", { className: "chonky-error" },
        react_1.default.createElement("span", { className: "chonky-error-name" }, "Chonky runtime error:"),
        " ",
        message,
        bulletList));
});
//# sourceMappingURL=ErrorMessage.js.map