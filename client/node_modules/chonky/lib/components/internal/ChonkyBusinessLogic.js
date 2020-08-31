"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
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
exports.ChonkyBusinessLogic = void 0;
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var drag_and_drop_recoil_1 = require("../../recoil/drag-and-drop.recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
var file_list_recoil_1 = require("../../recoil/file-list.recoil");
var files_recoil_1 = require("../../recoil/files.recoil");
var selection_recoil_1 = require("../../recoil/selection.recoil");
var thumbnails_recoil_1 = require("../../recoil/thumbnails.recoil");
var file_actions_1 = require("../../util/file-actions");
var file_browser_handle_1 = require("../../util/file-browser-handle");
var options_1 = require("../../util/options");
var search_1 = require("../../util/search");
var selection_1 = require("../../util/selection");
var sort_1 = require("../../util/sort");
var special_actions_1 = require("../../util/special-actions");
exports.ChonkyBusinessLogic = react_1.default.memo(react_1.default.forwardRef(function (props, ref) {
    var files = props.files;
    // Instance ID used to distinguish between multiple Chonky instances on the
    // same page const chonkyInstanceId = useStaticValue(shortid.generate);
    //
    // ==== Default values assignment
    var folderChain = props.folderChain ? props.folderChain : null;
    var fileActions = props.fileActions ? props.fileActions : [];
    var onFileAction = props.onFileAction ? props.onFileAction : null;
    var thumbnailGenerator = props.thumbnailGenerator
        ? props.thumbnailGenerator
        : null;
    var doubleClickDelay = typeof props.doubleClickDelay === 'number' ? props.doubleClickDelay : 300;
    var disableSelection = !!props.disableSelection;
    var enableDragAndDrop = !!props.enableDragAndDrop;
    //
    // ==== File array sorting
    var sortedFiles = sort_1.useFileSorting(files);
    //
    // ==== File selections
    var _a = selection_1.useSelection(sortedFiles, disableSelection), selection = _a.selection, selectionUtilRef = _a.selectionUtilRef, selectionModifiers = _a.selectionModifiers;
    var setRecoilSelectionModifiers = recoil_1.useSetRecoilState(selection_recoil_1.selectionModifiersState);
    react_1.useEffect(function () {
        setRecoilSelectionModifiers(selectionModifiers);
    }, [selectionModifiers, setRecoilSelectionModifiers]);
    //
    // ==== File actions - actions that users can customise as they please
    file_actions_1.useFileActions(fileActions, onFileAction);
    //
    // ==== File options - toggleable options based on file actions
    var optionFilteredFiles = options_1.useOptions(sortedFiles);
    //
    // ==== File search (aka file array filtering)
    var searchFilteredFiles = search_1.useFileSearch(optionFilteredFiles);
    //
    // ==== Special actions - special actions hard-coded into Chonky that users
    //      cannot customize (easily).
    special_actions_1.useSpecialActionDispatcher(sortedFiles, selection, selectionUtilRef.current, selectionModifiers);
    //
    // ==== Setup the imperative handle for external use
    file_browser_handle_1.useFileBrowserHandle(ref, selectionModifiers);
    var setRecoilFiles = recoil_1.useSetRecoilState(files_recoil_1.filesState);
    react_1.useEffect(function () {
        setRecoilFiles(searchFilteredFiles);
    }, [searchFilteredFiles, setRecoilFiles]);
    var setFolderChain = recoil_1.useSetRecoilState(files_recoil_1.folderChainState);
    var setParentFolder = recoil_1.useSetRecoilState(files_recoil_1.parentFolderState);
    react_1.useEffect(function () {
        var parentFolder = folderChain && folderChain.length > 1
            ? folderChain[(folderChain === null || folderChain === void 0 ? void 0 : folderChain.length) - 2]
            : null;
        setFolderChain(folderChain);
        setParentFolder(parentFolder);
    }, [folderChain, setFolderChain, setParentFolder]);
    var setRecoilSelection = recoil_1.useSetRecoilState(selection_recoil_1.selectionState);
    react_1.useEffect(function () {
        setRecoilSelection(selection);
    }, [selection, setRecoilSelection]);
    var setRecoilThumbnailGenerator = recoil_1.useSetRecoilState(thumbnails_recoil_1.thumbnailGeneratorState);
    react_1.useEffect(function () {
        setRecoilThumbnailGenerator(function () { return thumbnailGenerator; });
    }, [thumbnailGenerator, setRecoilThumbnailGenerator]);
    var setRecoilDoubleClickDelay = recoil_1.useSetRecoilState(file_actions_recoil_1.doubleClickDelayState);
    react_1.useEffect(function () {
        setRecoilDoubleClickDelay(doubleClickDelay);
    }, [doubleClickDelay, setRecoilDoubleClickDelay]);
    var _b = recoil_1.useRecoilState(file_list_recoil_1.fileEntrySizeState);
    var setRecoilEnableDragAndDrop = recoil_1.useSetRecoilState(drag_and_drop_recoil_1.enableDragAndDropState);
    react_1.useEffect(function () {
        setRecoilEnableDragAndDrop(enableDragAndDrop);
    }, [enableDragAndDrop, setRecoilEnableDragAndDrop]);
    return null;
}));
//# sourceMappingURL=ChonkyBusinessLogic.js.map