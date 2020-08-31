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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFileEntry = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var icons_types_1 = require("../../types/icons.types");
var file_helper_1 = require("../../util/file-helper");
var file_icon_helper_1 = require("../../util/file-icon-helper");
var ChonkyIcon_1 = require("../external/ChonkyIcon");
var FileThumbnail_1 = require("../internal/FileThumbnail");
var BaseFileEntry_hooks_1 = require("./BaseFileEntry-hooks");
exports.BaseFileEntry = react_1.default.memo(function (props) {
    var file = props.file, selected = props.selected, style = props.style, dndIsDragging = props.dndIsDragging, dndIsOver = props.dndIsOver, dndCanDrop = props.dndCanDrop;
    // Deal with thumbnails
    var _a = react_1.useState(null), thumbnailUrl = _a[0], setThumbnailUrl = _a[1];
    var _b = react_1.useState(false), thumbnailLoading = _b[0], setThumbnailLoading = _b[1];
    BaseFileEntry_hooks_1.useThumbnailUrl(file, setThumbnailUrl, setThumbnailLoading);
    // Deal with file icon
    var iconData = file_icon_helper_1.useIconData(file);
    var backgroundColor = thumbnailUrl
        ? file_icon_helper_1.ColorsDark[iconData.colorCode]
        : file_icon_helper_1.ColorsLight[iconData.colorCode];
    var iconSpin = thumbnailLoading || !file;
    var icon = thumbnailLoading ? icons_types_1.ChonkyIconName.loading : iconData.icon;
    // Deal with drag & drop
    var dndIcon = BaseFileEntry_hooks_1.useDndIcon(selected, dndIsDragging, dndIsOver, dndCanDrop);
    // Determine modifier icons
    var modifierIconComponents = BaseFileEntry_hooks_1.useModifierIconComponents(file);
    // Determine file name
    var fileNameComponent = BaseFileEntry_hooks_1.useFileNameComponent(file);
    // Render the component
    var className = classnames_1.default({
        'chonky-file-entry': true,
        'chonky-file-entry-directory': file_helper_1.FileHelper.isDirectory(file),
        'chonky-file-entry-selected': selected,
        'chonky-file-entry-dragging': dndIsDragging,
        'chonky-file-entry-drop-hovered': dndIsOver && dndCanDrop,
    });
    return (react_1.default.createElement("div", { className: className, style: style },
        react_1.default.createElement("div", { className: "chonky-file-entry-inside" },
            dndIcon && (react_1.default.createElement("div", { className: "chonky-file-entry-dnd-indicator" },
                react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: dndIcon }))),
            react_1.default.createElement("div", { className: "chonky-file-entry-preview" },
                react_1.default.createElement("div", { className: "chonky-file-details" },
                    react_1.default.createElement("div", { className: "chonky-file-details-inside" },
                        react_1.default.createElement("div", { className: "chonky-file-details-item" }, file_helper_1.FileHelper.getReadableDate(file)),
                        react_1.default.createElement("div", { className: "chonky-file-details-item" }, file_helper_1.FileHelper.getReadableFileSize(file)))),
                react_1.default.createElement("div", { className: "chonky-file-icon" },
                    file_helper_1.FileHelper.isDirectory(file) && (react_1.default.createElement("div", { className: "chonky-file-icon-children-count" }, file_helper_1.FileHelper.getChildrenCount(file))),
                    react_1.default.createElement("div", { className: "chonky-file-icon-inside" },
                        react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icon, spin: iconSpin }))),
                react_1.default.createElement("div", { className: "chonky-file-selection" }),
                react_1.default.createElement(FileThumbnail_1.FileThumbnail, { thumbnailUrl: thumbnailUrl }),
                react_1.default.createElement("div", { className: "chonky-file-background", style: { backgroundColor: backgroundColor } })),
            react_1.default.createElement("div", { className: "chonky-file-entry-description" },
                react_1.default.createElement("div", { className: "chonky-file-entry-description-title", title: file ? file.name : undefined },
                    modifierIconComponents.length > 0 && (react_1.default.createElement("span", { className: "chonky-file-entry-description-title-modifiers" }, modifierIconComponents)),
                    fileNameComponent)))));
});
//# sourceMappingURL=BaseFileEntry.js.map