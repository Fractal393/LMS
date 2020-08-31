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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnDFileEntry = exports.DnDFileEntryType = void 0;
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var recoil_1 = require("recoil");
var special_actions_recoil_1 = require("../../recoil/special-actions.recoil");
var special_actions_types_1 = require("../../types/special-actions.types");
var file_helper_1 = require("../../util/file-helper");
var ClickableFileEntry_1 = require("./ClickableFileEntry");
exports.DnDFileEntryType = 'chonky-file-entry';
exports.DnDFileEntry = react_1.default.memo(function (props) {
    var file = props.file;
    var dispatchSpecialAction = recoil_1.useRecoilValue(special_actions_recoil_1.dispatchSpecialActionState);
    // For drag source
    var canDrag = file_helper_1.FileHelper.isDraggable(file);
    var onDragStart = react_1.useCallback(function () {
        if (!file_helper_1.FileHelper.isDraggable(file))
            return;
        dispatchSpecialAction({
            actionId: special_actions_types_1.SpecialAction.DragNDropStart,
            dragSource: file,
        });
    }, [dispatchSpecialAction, file]);
    var onDragEnd = react_1.useCallback(function (item, monitor) {
        var dropResult = monitor.getDropResult();
        if (!file_helper_1.FileHelper.isDraggable(file) ||
            !dropResult ||
            !dropResult.dropTarget) {
            return;
        }
        dispatchSpecialAction({
            actionId: special_actions_types_1.SpecialAction.DragNDropEnd,
            dragSource: file,
            dropTarget: dropResult.dropTarget,
            dropEffect: dropResult.dropEffect,
        });
    }, [dispatchSpecialAction, file]);
    // For drop target
    var onDrop = react_1.useCallback(function (item, monitor) {
        if (!monitor.canDrop())
            return;
        var customDropResult = {
            dropTarget: file,
        };
        return customDropResult;
    }, [file]);
    var canDrop = react_1.useCallback(function (item) {
        var isSameFile = file && item.file && file.id === item.file.id;
        return file_helper_1.FileHelper.isDroppable(file) && !isSameFile;
    }, [file]);
    // Create refs for react-dnd hooks
    var _a = react_dnd_1.useDrag({
        item: { type: exports.DnDFileEntryType, file: file },
        canDrag: canDrag,
        begin: onDragStart,
        end: onDragEnd,
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), dndIsDragging = _a[0].isDragging, drag = _a[1], preview = _a[2];
    var _b = react_dnd_1.useDrop({
        accept: exports.DnDFileEntryType,
        drop: onDrop,
        canDrop: canDrop,
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }); },
    }), _c = _b[0], dndIsOver = _c.isOver, dndCanDrop = _c.canDrop, drop = _b[1];
    react_1.useEffect(function () {
        // Set drag preview to an empty image because `DnDFileListDragLayer` will
        // provide its own preview.
        preview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    }, [preview]);
    return (react_1.default.createElement("div", { ref: drop, className: "chonky-file-entry-droppable-wrapper chonky-fill-parent" },
        react_1.default.createElement("div", { ref: file_helper_1.FileHelper.isDraggable(file) ? drag : null, className: "chonky-file-entry-draggable-wrapper chonky-fill-parent" },
            react_1.default.createElement(ClickableFileEntry_1.ClickableFileEntry, __assign({}, props, { dndIsDragging: dndIsDragging, dndIsOver: dndIsOver, dndCanDrop: dndCanDrop })))));
});
//# sourceMappingURL=DnDFileEntry.js.map