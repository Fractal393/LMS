"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickableFileEntry = void 0;
var react_1 = __importDefault(require("react"));
var file_helper_1 = require("../../util/file-helper");
var ClickableWrapper_1 = require("../internal/ClickableWrapper");
var BaseFileEntry_1 = require("./BaseFileEntry");
var ClickableFileEntry_hooks_1 = require("./ClickableFileEntry-hooks");
exports.ClickableFileEntry = react_1.default.memo(function (props) {
    var file = props.file, displayIndex = props.displayIndex;
    var fileClickHandlers = ClickableFileEntry_hooks_1.useFileClickHandlers(file, displayIndex);
    var wrapperProps = __assign({ wrapperTag: 'div', passthroughProps: {
            className: 'chonky-file-entry-clickable-wrapper chonky-fill-parent',
        } }, (file_helper_1.FileHelper.isClickable(file) ? fileClickHandlers : undefined));
    return (react_1.default.createElement(ClickableWrapper_1.ClickableWrapper, __assign({}, wrapperProps),
        react_1.default.createElement(BaseFileEntry_1.BaseFileEntry, __assign({}, props))));
});
//# sourceMappingURL=ClickableFileEntry.js.map