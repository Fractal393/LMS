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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInternalFileActionRequester = exports.useInternalFileActionDispatcher = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../recoil/file-actions.recoil");
var files_recoil_1 = require("../recoil/files.recoil");
var options_recoil_1 = require("../recoil/options.recoil");
var selection_recoil_1 = require("../recoil/selection.recoil");
var sort_recoil_1 = require("../recoil/sort.recoil");
var special_actions_recoil_1 = require("../recoil/special-actions.recoil");
var sort_types_1 = require("../types/sort.types");
var special_actions_types_1 = require("../types/special-actions.types");
var hooks_helpers_1 = require("./hooks-helpers");
var logger_1 = require("./logger");
var selection_1 = require("./selection");
var validation_1 = require("./validation");
exports.useInternalFileActionDispatcher = function (externalFileActonHandler) {
    var externalFileActonHandlerRef = hooks_helpers_1.useInstanceVariable(externalFileActonHandler);
    var fileActionMapRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(file_actions_recoil_1.fileActionMapState));
    var dispatchFileAction = react_1.useCallback(function (actionData) {
        logger_1.Logger.debug("FILE ACTION DISPATCH:", actionData);
        var actionId = actionData.actionId;
        var action = fileActionMapRef.current[actionId];
        if (action) {
            if (validation_1.isFunction(externalFileActonHandlerRef.current)) {
                Promise.resolve(externalFileActonHandlerRef.current(action, actionData)).catch(function (error) {
                    return logger_1.Logger.error("User-defined \"onAction\" handler threw an error: " + error.message);
                });
            }
        }
        else {
            logger_1.Logger.error("Internal components dispatched a \"" + actionId + "\" file action, " +
                "but such action was not registered.");
        }
    }, [externalFileActonHandlerRef, fileActionMapRef]);
    return dispatchFileAction;
};
exports.useInternalFileActionRequester = function () {
    // Write Recoil state to instance variables so we can access these values from
    // the callback below without re-creating the callback function
    var fileActionMapRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(file_actions_recoil_1.fileActionMapState));
    var setSortConfigRef = hooks_helpers_1.useInstanceVariable(recoil_1.useSetRecoilState(sort_recoil_1.sortConfigState));
    var setOptionMapRef = hooks_helpers_1.useInstanceVariable(recoil_1.useSetRecoilState(options_recoil_1.optionMapState));
    var dispatchFileActionRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(file_actions_recoil_1.dispatchFileActionState));
    var dispatchSpecialActionRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(special_actions_recoil_1.dispatchSpecialActionState));
    var filesRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(files_recoil_1.filesState));
    var selectionRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(selection_recoil_1.selectionState));
    return react_1.useCallback(function (fileActionId) {
        logger_1.Logger.debug("FILE ACTION REQUEST:", fileActionId);
        var action = fileActionMapRef.current[fileActionId];
        if (!action) {
            logger_1.Logger.warn("Internal components requested the \"" + fileActionId + "\" file " +
                "action, but such action was not registered.");
            return;
        }
        // Determine files for the action if action requires selection
        var selectedFilesForAction = action.requiresSelection
            ? selection_1.SelectionHelper.getSelectedFiles(filesRef.current, selectionRef.current, action.fileFilter)
            : undefined;
        if (action.requiresSelection &&
            (!selectedFilesForAction || selectedFilesForAction.length === 0)) {
            logger_1.Logger.warn("Internal components requested the \"" + fileActionId + "\" file " +
                "action, but the selection for this action was empty. This " +
                "might a bug in the code of the presentational components.");
            return;
        }
        var actionData = {
            actionId: action.id,
            target: undefined,
            files: selectedFilesForAction,
        };
        //
        // === Dispatch a normal action, as usual
        dispatchFileActionRef.current(actionData);
        //
        // === Update sort state if necessary
        var sortKeySelector = action.sortKeySelector;
        if (sortKeySelector) {
            setSortConfigRef.current(function (sortConfig) {
                var order = sort_types_1.SortOrder.Asc;
                if (sortConfig.fileActionId === action.id) {
                    order =
                        sortConfig.order === sort_types_1.SortOrder.Asc
                            ? sort_types_1.SortOrder.Desc
                            : sort_types_1.SortOrder.Asc;
                }
                return {
                    fileActionId: action.id,
                    sortKeySelector: sortKeySelector,
                    order: order,
                };
            });
        }
        //
        // === Update option state if necessary
        var option = action.option;
        if (option) {
            setOptionMapRef.current(function (optionMap) {
                var newOptionMap = __assign({}, optionMap);
                newOptionMap[option.id] = !optionMap[option.id];
                return newOptionMap;
            });
        }
        //
        // === Dispatch a special action if file action defines it
        var specialActionId = action.specialActionToDispatch;
        if (specialActionId) {
            // We can only dispatch "simple" special actions, i.e. special
            // actions that do not require additional parameters.
            switch (specialActionId) {
                case special_actions_types_1.SpecialAction.OpenParentFolder:
                case special_actions_types_1.SpecialAction.ToggleSearchBar:
                case special_actions_types_1.SpecialAction.SelectAllFiles:
                case special_actions_types_1.SpecialAction.ClearSelection:
                    dispatchSpecialActionRef.current({
                        actionId: specialActionId,
                    });
                    break;
                default:
                    logger_1.Logger.warn("File action \"" + action.id + "\" tried to dispatch a " +
                        ("special action \"" + specialActionId + "\", but that ") +
                        "special action was not marked as simple. File " +
                        "actions can only trigger simple special actions.");
            }
        }
    }, [
        fileActionMapRef,
        setSortConfigRef,
        setOptionMapRef,
        dispatchFileActionRef,
        dispatchSpecialActionRef,
        filesRef,
        selectionRef,
    ]);
};
//# sourceMappingURL=file-action-handlers.js.map