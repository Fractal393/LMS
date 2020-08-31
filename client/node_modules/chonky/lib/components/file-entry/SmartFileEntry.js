"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
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
exports.SmartFileEntry = void 0;
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var drag_and_drop_recoil_1 = require("../../recoil/drag-and-drop.recoil");
var files_recoil_1 = require("../../recoil/files.recoil");
var selection_recoil_1 = require("../../recoil/selection.recoil");
var ClickableFileEntry_1 = require("./ClickableFileEntry");
var DnDFileEntry_1 = require("./DnDFileEntry");
exports.SmartFileEntry = react_1.default.memo(function (props) {
    var fileId = props.fileId, displayIndex = props.displayIndex;
    var file = recoil_1.useRecoilValue(files_recoil_1.fileDataState(fileId));
    var selected = recoil_1.useRecoilValue(selection_recoil_1.fileSelectedState(fileId));
    var enableDragAndDrop = recoil_1.useRecoilValue(drag_and_drop_recoil_1.enableDragAndDropState);
    var entryProps = {
        file: file,
        displayIndex: displayIndex,
        selected: selected,
    };
    return enableDragAndDrop ? (react_1.default.createElement(DnDFileEntry_1.DnDFileEntry, __assign({}, entryProps))) : (react_1.default.createElement(ClickableFileEntry_1.ClickableFileEntry, __assign({}, entryProps)));
});
//# sourceMappingURL=SmartFileEntry.js.map