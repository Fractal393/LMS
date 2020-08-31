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
exports.FileThumbnail = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
exports.FileThumbnail = react_1.default.memo(function (props) {
    var thumbnailUrl = props.thumbnailUrl;
    var thumbnailStyle = thumbnailUrl
        ? { backgroundImage: "url('" + thumbnailUrl + "')" }
        : {};
    var className = classnames_1.default({
        'chonky-file-thumbnail': true,
        'chonky-file-thumbnail-hidden': !thumbnailUrl,
    });
    return react_1.default.createElement("div", { className: className, style: thumbnailStyle });
});
//# sourceMappingURL=FileThumbnail.js.map