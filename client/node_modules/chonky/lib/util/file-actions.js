"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileActionProps = exports.useFileActionTrigger = exports.useFileActions = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../recoil/file-actions.recoil");
var files_recoil_1 = require("../recoil/files.recoil");
var options_recoil_1 = require("../recoil/options.recoil");
var search_recoil_1 = require("../recoil/search.recoil");
var sort_recoil_1 = require("../recoil/sort.recoil");
var icons_types_1 = require("../types/icons.types");
var sort_types_1 = require("../types/sort.types");
var file_action_handlers_1 = require("./file-action-handlers");
var file_actions_definitions_1 = require("./file-actions-definitions");
var file_helper_1 = require("./file-helper");
var hooks_helpers_1 = require("./hooks-helpers");
exports.useFileActions = function (fileActions, externalFileActonHandler) {
    // Recoil state: Put file actions and file action map into state
    var setFileActions = recoil_1.useSetRecoilState(file_actions_recoil_1.fileActionsState);
    var setFileActionMap = recoil_1.useSetRecoilState(file_actions_recoil_1.fileActionMapState);
    react_1.useEffect(function () {
        var fileActionMap = {};
        for (var _i = 0, fileActions_1 = fileActions; _i < fileActions_1.length; _i++) {
            var action = fileActions_1[_i];
            fileActionMap[action.id] = action;
        }
        setFileActions(fileActions);
        setFileActionMap(fileActionMap);
    }, [fileActions, setFileActions, setFileActionMap]);
    // Prepare file action dispatcher (used to dispatch actions to users)
    var internalFileActionDispatcher = file_action_handlers_1.useInternalFileActionDispatcher(externalFileActonHandler);
    // Recoil state: Put file action dispatcher into Recoil state, in a way that will
    // not cause unnecessary re-renders.
    var safeInternalFileActionDispatcher = hooks_helpers_1.useRefCallbackWithErrorHandling(internalFileActionDispatcher, 'the internal file action requester');
    var setDispatchFileAction = recoil_1.useSetRecoilState(file_actions_recoil_1.dispatchFileActionState);
    react_1.useEffect(function () { return setDispatchFileAction(function () { return safeInternalFileActionDispatcher; }); }, [
        safeInternalFileActionDispatcher,
        setDispatchFileAction,
    ]);
    // Prepare file action requester (used to request a file action to be dispatched
    // internally)
    var internalFileActionRequester = file_action_handlers_1.useInternalFileActionRequester();
    // Recoil state: Put file action requester into Recoil state, in a way that will
    // not cause unnecessary re-renders.
    var safeInternalFileActionRequester = hooks_helpers_1.useRefCallbackWithErrorHandling(internalFileActionRequester, 'the internal file action requester');
    var setRequestFileAction = recoil_1.useSetRecoilState(file_actions_recoil_1.requestFileActionState);
    react_1.useEffect(function () { return setRequestFileAction(function () { return safeInternalFileActionRequester; }); }, [
        safeInternalFileActionRequester,
        setRequestFileAction,
    ]);
    return { internalFileActionDispatcher: internalFileActionDispatcher, internalFileActionRequester: internalFileActionRequester };
};
exports.useFileActionTrigger = function (fileActionId) {
    var requestFileAction = recoil_1.useRecoilValue(file_actions_recoil_1.requestFileActionState);
    return react_1.useCallback(function () { return requestFileAction(fileActionId); }, [
        fileActionId,
        requestFileAction,
    ]);
};
exports.useFileActionProps = function (fileActionId) {
    var parentFolder = recoil_1.useRecoilValue(files_recoil_1.parentFolderState);
    var sortConfig = recoil_1.useRecoilValue(sort_recoil_1.sortConfigState);
    var optionMap = recoil_1.useRecoilValue(options_recoil_1.optionMapState);
    var searchBarVisible = recoil_1.useRecoilValue(search_recoil_1.searchBarVisibleState);
    var action = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionDataState(fileActionId));
    var actionSelectionSize = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionSelectedFilesCountState(fileActionId));
    var actionSelectionEmpty = actionSelectionSize === 0;
    return react_1.useMemo(function () {
        var _a, _b;
        if (!action)
            return { icon: null, active: false, disabled: true };
        var icon = (_b = (_a = action.toolbarButton) === null || _a === void 0 ? void 0 : _a.icon) !== null && _b !== void 0 ? _b : null;
        if (action.sortKeySelector) {
            if (sortConfig.fileActionId === action.id) {
                if (sortConfig.order === sort_types_1.SortOrder.Asc) {
                    icon = icons_types_1.ChonkyIconName.sortAsc;
                }
                else {
                    icon = icons_types_1.ChonkyIconName.sortDesc;
                }
            }
            else {
                icon = icons_types_1.ChonkyIconName.circle;
            }
        }
        else if (action.option) {
            if (optionMap[action.option.id]) {
                icon = icons_types_1.ChonkyIconName.checkActive;
            }
            else {
                icon = icons_types_1.ChonkyIconName.checkInactive;
            }
        }
        var isSearchButtonAndSearchVisible = action.id === file_actions_definitions_1.ChonkyActions.ToggleSearch.id && searchBarVisible;
        var isSortButtonAndCurrentSort = action.id === sortConfig.fileActionId;
        var isOptionAndEnabled = action.option
            ? !!optionMap[action.option.id]
            : false;
        var active = isSearchButtonAndSearchVisible ||
            isSortButtonAndCurrentSort ||
            isOptionAndEnabled;
        var disabled = !!action.requiresSelection && actionSelectionEmpty;
        if (action.id === file_actions_definitions_1.ChonkyActions.OpenParentFolder.id) {
            // We treat `open_parent_folder` file action as a special case as it
            // requires the parent folder to be present to work...
            disabled = disabled || !file_helper_1.FileHelper.isOpenable(parentFolder);
        }
        return { icon: icon, active: active, disabled: disabled };
    }, [
        action,
        sortConfig,
        optionMap,
        searchBarVisible,
        parentFolder,
        actionSelectionEmpty,
    ]);
};
//# sourceMappingURL=file-actions.js.map