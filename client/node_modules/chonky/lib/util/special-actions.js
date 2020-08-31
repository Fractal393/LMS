"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpecialFileActionHandlerMap = exports.useSpecialActionDispatcher = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../recoil/file-actions.recoil");
var files_recoil_1 = require("../recoil/files.recoil");
var search_recoil_1 = require("../recoil/search.recoil");
var selection_recoil_1 = require("../recoil/selection.recoil");
var special_actions_recoil_1 = require("../recoil/special-actions.recoil");
var special_actions_types_1 = require("../types/special-actions.types");
var file_actions_definitions_1 = require("./file-actions-definitions");
var file_helper_1 = require("./file-helper");
var hooks_helpers_1 = require("./hooks-helpers");
var logger_1 = require("./logger");
/**
 * Returns a dispatch method meant to be used by child components. This dispatch
 * method is meant for "special" internal actions. It takes a special action, and
 * transforms it into a "file action" that can be handled by the user.
 */
exports.useSpecialActionDispatcher = function (files, selection, selectionUtil, selectionModifiers) {
    // Create the special action handler map
    var specialActionHandlerMap = exports.useSpecialFileActionHandlerMap(selectionUtil, selectionModifiers);
    // Process special actions using the handlers from the map
    var dispatchSpecialAction = react_1.useCallback(function (actionData) {
        logger_1.Logger.debug("SPECIAL ACTION REQUEST:", actionData);
        var actionId = actionData.actionId;
        var handler = specialActionHandlerMap[actionId];
        if (handler) {
            try {
                handler(actionData);
            }
            catch (error) {
                logger_1.Logger.error("Handler for special action \"" + actionId + "\" threw an error.", error);
            }
        }
        else {
            logger_1.Logger.error("Internal components dispatched a \"" + actionId + "\" special action, " +
                "but no internal handler is available to process it.");
        }
    }, [specialActionHandlerMap]);
    var setRecoilDispatchSpecialAction = recoil_1.useSetRecoilState(special_actions_recoil_1.dispatchSpecialActionState);
    react_1.useEffect(function () {
        setRecoilDispatchSpecialAction(function () { return dispatchSpecialAction; });
    }, [dispatchSpecialAction, setRecoilDispatchSpecialAction]);
};
exports.useSpecialFileActionHandlerMap = function (selectionUtil, selectionModifiers) {
    // Instance variables based on Recoil state
    var _recoilFiles = recoil_1.useRecoilValue(files_recoil_1.filesState);
    var filesRef = hooks_helpers_1.useInstanceVariable(_recoilFiles);
    var parentFolderRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(files_recoil_1.parentFolderState));
    var selectedFilesRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(selection_recoil_1.selectedFilesState));
    var dispatchFileActionRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(file_actions_recoil_1.dispatchFileActionState));
    var setSearchBarVisible = recoil_1.useSetRecoilState(search_recoil_1.searchBarVisibleState);
    // Internal instance variables used by special actions
    var lastClickDisplayIndexRef = react_1.useRef(null);
    react_1.useEffect(function () {
        // We zero out the last click whenever files update
        lastClickDisplayIndexRef.current = null;
    }, [_recoilFiles]);
    // Define handlers in a map
    var specialActionHandlerMap = react_1.useMemo(function () {
        var _a;
        return _a = {},
            _a[special_actions_types_1.SpecialAction.MouseClickFile] = function (data) {
                var _a;
                if (data.clickType === 'double') {
                    if (file_helper_1.FileHelper.isOpenable(data.file)) {
                        dispatchFileActionRef.current({
                            actionId: file_actions_definitions_1.ChonkyActions.OpenFiles.id,
                            target: data.file,
                            // To simulate Windows Explorer and Nautilus behaviour,
                            // a double click on a file only opens that file even if
                            // there is a selection.
                            files: [data.file],
                        });
                    }
                }
                else {
                    // We're dealing with a single click
                    if (file_helper_1.FileHelper.isSelectable(data.file)) {
                        if (data.ctrlKey) {
                            // Multiple selection
                            selectionModifiers.toggleSelection(data.file.id, false);
                            lastClickDisplayIndexRef.current = data.fileDisplayIndex;
                        }
                        else if (data.shiftKey) {
                            // Range selection
                            if (typeof lastClickDisplayIndexRef.current === 'number') {
                                // We have the index of the previous click
                                var rangeStart = lastClickDisplayIndexRef.current;
                                var rangeEnd = data.fileDisplayIndex;
                                if (rangeStart > rangeEnd) {
                                    _a = [rangeEnd, rangeStart], rangeStart = _a[0], rangeEnd = _a[1];
                                }
                                var fileIds = filesRef.current
                                    .slice(rangeStart, rangeEnd + 1)
                                    .filter(function (file) { return file_helper_1.FileHelper.isSelectable(file); })
                                    .map(function (file) { return file.id; });
                                selectionModifiers.selectFiles(fileIds, true);
                            }
                            else {
                                // Since we can't do a range selection, do a
                                // multiple selection
                                selectionModifiers.toggleSelection(data.file.id, false);
                                lastClickDisplayIndexRef.current =
                                    data.fileDisplayIndex;
                            }
                        }
                        else {
                            // Exclusive selection
                            selectionModifiers.toggleSelection(data.file.id, true);
                            lastClickDisplayIndexRef.current = data.fileDisplayIndex;
                        }
                    }
                    else {
                        if (!data.ctrlKey)
                            selectionModifiers.clearSelection();
                        lastClickDisplayIndexRef.current = data.fileDisplayIndex;
                    }
                }
            },
            _a[special_actions_types_1.SpecialAction.KeyboardClickFile] = function (data) {
                lastClickDisplayIndexRef.current = data.fileDisplayIndex;
                if (data.enterKey) {
                    // We only dispatch the Open Files action here when the selection is
                    // empty. Otherwise, `Enter` key presses are handled by the
                    // hotkey manager for the Open Files action.
                    if (selectedFilesRef.current.length === 0) {
                        dispatchFileActionRef.current({
                            actionId: file_actions_definitions_1.ChonkyActions.OpenFiles.id,
                            target: data.file,
                            files: [data.file],
                        });
                    }
                }
                else if (data.spaceKey && file_helper_1.FileHelper.isSelectable(data.file)) {
                    selectionModifiers.toggleSelection(data.file.id, data.ctrlKey);
                }
            },
            _a[special_actions_types_1.SpecialAction.OpenParentFolder] = function () {
                if (file_helper_1.FileHelper.isOpenable(parentFolderRef.current)) {
                    dispatchFileActionRef.current({
                        actionId: file_actions_definitions_1.ChonkyActions.OpenFiles.id,
                        target: parentFolderRef.current,
                        files: [parentFolderRef.current],
                    });
                }
                else {
                    logger_1.Logger.warn("Special action \"" + special_actions_types_1.SpecialAction.OpenParentFolder + "\" was " +
                        "dispatched even though the parent folder is not " +
                        "openable. This indicates a bug in presentation components.");
                }
            },
            _a[special_actions_types_1.SpecialAction.OpenFolderChainFolder] = function (data) {
                dispatchFileActionRef.current({
                    actionId: file_actions_definitions_1.ChonkyActions.OpenFiles.id,
                    target: data.file,
                    files: [data.file],
                });
            },
            _a[special_actions_types_1.SpecialAction.ToggleSearchBar] = function () {
                setSearchBarVisible(function (visible) { return !visible; });
            },
            _a[special_actions_types_1.SpecialAction.SelectAllFiles] = function () {
                var fileIds = filesRef.current
                    .filter(function (file) { return file_helper_1.FileHelper.isSelectable(file); })
                    .map(function (file) { return file.id; });
                selectionModifiers.selectFiles(fileIds, true);
            },
            _a[special_actions_types_1.SpecialAction.ClearSelection] = function () {
                selectionModifiers.clearSelection();
            },
            _a[special_actions_types_1.SpecialAction.DragNDropStart] = function (data) {
                var file = data.dragSource;
                if (!selectionUtil.isSelected(file)) {
                    selectionModifiers.clearSelection();
                    if (file_helper_1.FileHelper.isSelectable(file)) {
                        selectionModifiers.selectFiles([file.id]);
                    }
                }
            },
            _a[special_actions_types_1.SpecialAction.DragNDropEnd] = function (data) {
                if (selectionUtil.isSelected(data.dropTarget)) {
                    // Can't drop a selection into itself
                    return;
                }
                var selectedFiles = selectionUtil.getSelectedFiles(file_helper_1.FileHelper.isDraggable);
                var droppedFiles = selectedFiles.length > 0 ? selectedFiles : [data.dragSource];
                dispatchFileActionRef.current({
                    actionId: data.dropEffect === 'copy'
                        ? file_actions_definitions_1.ChonkyActions.DuplicateFilesTo.id
                        : file_actions_definitions_1.ChonkyActions.MoveFilesTo.id,
                    target: data.dropTarget,
                    files: droppedFiles,
                });
            },
            _a;
    }, [
        selectionUtil,
        selectionModifiers,
        filesRef,
        parentFolderRef,
        selectedFilesRef,
        dispatchFileActionRef,
        setSearchBarVisible,
    ]);
    return specialActionHandlerMap;
};
//# sourceMappingURL=special-actions.js.map