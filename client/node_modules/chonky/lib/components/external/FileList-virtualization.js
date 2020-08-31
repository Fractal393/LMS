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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGridRenderer = exports.noContentRenderer = exports.useEntryRenderer = exports.getRowHeight = exports.getColWidth = exports.DefaultEntrySize = exports.SmallThumbsSize = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Grid_1 = require("react-virtualized/dist/commonjs/Grid");
var icons_types_1 = require("../../types/icons.types");
var validation_1 = require("../../util/validation");
var SmartFileEntry_1 = require("../file-entry/SmartFileEntry");
var ChonkyIcon_1 = require("./ChonkyIcon");
exports.SmallThumbsSize = { width: 165, height: 130 };
exports.DefaultEntrySize = exports.SmallThumbsSize;
exports.getColWidth = function (index, columnCount, entrySize, gutterSize) {
    if (index === columnCount - 1)
        return entrySize.width;
    return entrySize.width + gutterSize;
};
exports.getRowHeight = function (index, rowCount, entrySize, gutterSize) {
    // We always add `gutterSize` to height because we don't want the last item
    // sticking to the bottom of the scroll pane.
    return entrySize.height + gutterSize;
};
exports.useEntryRenderer = function (files) {
    // All hook parameters should go into `deps` array
    var entryRenderer = react_1.useCallback(function (virtualKey, index, style, parent, gutterSize, lastRow, lastColumn) {
        if (typeof gutterSize === 'number') {
            if (!lastColumn)
                style.width = style.width - gutterSize;
            // We always subtract `gutterSize` to height because we don't want the
            // last item sticking to the bottom of the scroll pane.
            style.height = style.height - gutterSize;
        }
        // When rendering the file list, some browsers cut off the last pixel of
        // a file entry, making it look ugly. To get around this rendering bug
        // we make file entries in the last row/column 1 pixel shorter.
        // TODO: Instead of subtracting 1 here, add 1 to width/height of last
        //  column.
        if (lastRow)
            style.height = style.height - 1;
        if (lastColumn)
            style.width = style.width - 1;
        if (index >= files.length)
            return null;
        var file = files[index];
        var key = file ? file.id : "loading-file-" + virtualKey;
        return (react_1.default.createElement("div", { key: key, className: "chonky-virtualization-wrapper", style: style },
            react_1.default.createElement(SmartFileEntry_1.SmartFileEntry, { fileId: file ? file.id : null, displayIndex: index })));
    }, [files]);
    return entryRenderer;
};
exports.noContentRenderer = function (height) {
    var placeholderProps = {
        className: classnames_1.default({
            'chonky-file-list-notification': true,
            'chonky-file-list-notification-empty': true,
        }),
    };
    if (typeof height === 'number')
        placeholderProps.style = { height: height };
    return (react_1.default.createElement("div", __assign({}, placeholderProps),
        react_1.default.createElement("div", { className: "chonky-file-list-notification-content" },
            react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icons_types_1.ChonkyIconName.folderOpen }),
            "\u00A0 Nothing to show")));
};
exports.useGridRenderer = function (files, entrySize, entryRenderer, thumbsGridRef, fillParentContainer) {
    return react_1.useCallback(function (_a) {
        var width = _a.width, height = _a.height;
        var isMobile = validation_1.isMobileDevice();
        var gutter = isMobile ? 5 : 8;
        var scrollbar = !fillParentContainer || isMobile ? 0 : 16;
        // TODO: const isLargeThumbs = view === FileView.LargeThumbs;
        var columnCount;
        if (isMobile) {
            // On mobile device, we hardcode column count to 2
            columnCount = 2;
        }
        else {
            var columnCountFloat = (width + gutter - scrollbar) / (entrySize.width + gutter);
            columnCount = Math.max(1, Math.floor(columnCountFloat));
        }
        var rowCount = Math.ceil(files.length / columnCount);
        return (react_1.default.createElement(Grid_1.Grid, { style: { minHeight: entrySize.height + 10 }, ref: thumbsGridRef, cellRenderer: function (data) {
                var index = data.rowIndex * columnCount + data.columnIndex;
                return entryRenderer(data.key, index, __assign({}, data.style), data.parent, gutter, data.rowIndex === rowCount - 1, data.columnIndex === columnCount - 1);
            }, noContentRenderer: function () { return exports.noContentRenderer(entrySize.height); }, rowCount: rowCount, columnCount: columnCount, columnWidth: function (_a) {
                var index = _a.index;
                return exports.getColWidth(index, columnCount, entrySize, gutter);
            }, rowHeight: function (_a) {
                var index = _a.index;
                return exports.getRowHeight(index, rowCount, entrySize, gutter);
            }, overscanRowCount: 2, width: width, containerStyle: { minHeight: 50 }, height: typeof height === 'number' ? height : 500, autoHeight: !fillParentContainer, tabIndex: null }));
    }, [files, entrySize, entryRenderer, thumbsGridRef, fillParentContainer]);
};
//# sourceMappingURL=FileList-virtualization.js.map