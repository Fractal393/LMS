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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileList = void 0;
var react_1 = __importStar(require("react"));
var AutoSizer_1 = require("react-virtualized/dist/commonjs/AutoSizer");
var recoil_1 = require("recoil");
var file_list_recoil_1 = require("../../recoil/file-list.recoil");
var files_recoil_1 = require("../../recoil/files.recoil");
var logger_1 = require("../../util/logger");
var ErrorMessage_1 = require("../internal/ErrorMessage");
var FileList_virtualization_1 = require("./FileList-virtualization");
exports.FileList = react_1.default.memo(function () {
    var files = recoil_1.useRecoilValue(files_recoil_1.filesState);
    var entrySize = recoil_1.useRecoilValue(file_list_recoil_1.fileEntrySizeState);
    var entryRenderer = FileList_virtualization_1.useEntryRenderer(files);
    // Thumbs grid ref is not used at the moment but will be necessary later. It is
    // used to recompute the height of rows in the `List` from `react-virtualized`.
    // Consult Chonky v0.x implementation for details.
    var thumbsGridRef = react_1.useRef();
    // TODO: Read this value from somewhere.
    var fillParentContainer = true;
    var gridRenderer = FileList_virtualization_1.useGridRenderer(files, entrySize, entryRenderer, thumbsGridRef, fillParentContainer);
    if (!files) {
        var errorMessage = exports.FileList.name + " cannot find the \"files\" array via React context. This " +
            ("happens when " + exports.FileList.name + " is placed outside of \"FileBrowser\"") +
            "component.";
        logger_1.Logger.error(errorMessage);
        return react_1.default.createElement(ErrorMessage_1.ErrorMessage, { message: errorMessage });
    }
    return (react_1.default.createElement("div", { className: "chonky-file-list", style: { minHeight: entrySize.height } },
        react_1.default.createElement(AutoSizer_1.AutoSizer, { disableHeight: !fillParentContainer }, gridRenderer)));
});
//# sourceMappingURL=FileList.js.map