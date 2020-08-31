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
exports.DnDFileListDragLayer = void 0;
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var recoil_1 = require("recoil");
var selection_recoil_1 = require("../../recoil/selection.recoil");
var DnDFileEntry_1 = require("./DnDFileEntry");
var layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
var getItemStyles = function (initialCursorOffset, initialFileOffset, currentFileOffset) {
    if (!initialCursorOffset || !initialFileOffset || !currentFileOffset) {
        return {
            display: 'none',
        };
    }
    var x = initialCursorOffset.x + (currentFileOffset.x - initialFileOffset.x);
    var y = initialCursorOffset.y + (currentFileOffset.y - initialFileOffset.y);
    var transform = "translate(" + x + "px, " + y + "px)";
    return {
        transform: transform,
        WebkitTransform: transform,
    };
};
exports.DnDFileListDragLayer = function () {
    var selectionSize = recoil_1.useRecoilValue(selection_recoil_1.selectionSizeState);
    var _a = react_dnd_1.useDragLayer(function (monitor) { return ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialCursorOffset: monitor.getInitialClientOffset(),
        initialFileOffset: monitor.getInitialSourceClientOffset(),
        currentFileOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }); }), itemType = _a.itemType, item = _a.item, initialCursorOffset = _a.initialCursorOffset, initialFileOffset = _a.initialFileOffset, currentFileOffset = _a.currentFileOffset, isDragging = _a.isDragging;
    function renderItem() {
        if (!item.file || itemType !== DnDFileEntry_1.DnDFileEntryType)
            return;
        return (react_1.default.createElement("div", { className: "chonky-file-drag-preview" },
            react_1.default.createElement("b", null, item.file.name),
            selectionSize > 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                ' and ',
                react_1.default.createElement("strong", null,
                    selectionSize - 1,
                    " other file",
                    selectionSize - 1 !== 1 ? 's' : '')))));
    }
    if (!isDragging) {
        return null;
    }
    return (react_1.default.createElement("div", { style: layerStyles },
        react_1.default.createElement("div", { style: getItemStyles(initialCursorOffset, initialFileOffset, currentFileOffset) }, renderItem())));
};
//# sourceMappingURL=DnDFileListDragLayer.js.map