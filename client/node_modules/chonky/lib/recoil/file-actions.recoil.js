"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileActionSelectedFilesCountState = exports.fileActionSelectedFilesState = exports.fileActionDataState = exports.doubleClickDelayState = exports.requestFileActionState = exports.dispatchFileActionState = exports.fileActionMapState = exports.fileActionsState = void 0;
var recoil_1 = require("recoil");
var constants_1 = require("../util/constants");
var selection_recoil_1 = require("./selection.recoil");
//
// ==== Atoms
exports.fileActionsState = recoil_1.atom({
    key: 'fileActionsState',
    default: [],
});
exports.fileActionMapState = recoil_1.atom({
    key: 'fileActionMapState',
    default: {},
});
exports.dispatchFileActionState = recoil_1.atom({
    key: 'dispatchFileActionState',
    default: constants_1.NOOP_FUNCTION,
});
exports.requestFileActionState = recoil_1.atom({
    key: 'requestFileActionState',
    default: constants_1.NOOP_FUNCTION,
});
exports.doubleClickDelayState = recoil_1.atom({
    key: 'doubleClickDelayState',
    default: 300,
});
//
// ==== Selectors
exports.fileActionDataState = recoil_1.selectorFamily({
    key: 'fileActionDataState',
    get: function (fileActionId) { return function (_a) {
        var get = _a.get;
        if (!fileActionId)
            return null;
        var fileActionMap = get(exports.fileActionMapState);
        var fileAction = fileActionMap[fileActionId];
        return fileAction !== null && fileAction !== void 0 ? fileAction : null;
    }; },
});
/**
 * This Recoil selector family returns a subset of the global file selection that
 * satisfies filter of the provided file action.
 */
exports.fileActionSelectedFilesState = recoil_1.selectorFamily({
    key: 'fileActionSelectedFilesState',
    get: function (fileActionId) { return function (_a) {
        var get = _a.get;
        if (!fileActionId)
            return [];
        var fileActionMap = get(exports.fileActionMapState);
        var fileAction = fileActionMap[fileActionId];
        if (!fileAction)
            return [];
        var selectedFiles = get(selection_recoil_1.selectedFilesState);
        if (fileAction.fileFilter) {
            return selectedFiles.filter(fileAction.fileFilter);
        }
        else {
            return selectedFiles;
        }
    }; },
});
exports.fileActionSelectedFilesCountState = recoil_1.selectorFamily({
    key: 'fileActionSelectedFilesCountState',
    get: function (fileActionId) { return function (_a) {
        var get = _a.get;
        var actionSelectedFiles = get(exports.fileActionSelectedFilesState(fileActionId));
        return actionSelectedFiles.length;
    }; },
});
//# sourceMappingURL=file-actions.recoil.js.map