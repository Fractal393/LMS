"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSelectedState = exports.selectionSizeState = exports.selectedFilesState = exports.selectionModifiersState = exports.selectionState = void 0;
var recoil_1 = require("recoil");
var constants_1 = require("../util/constants");
var selection_1 = require("../util/selection");
var files_recoil_1 = require("./files.recoil");
//
// ==== Atoms
exports.selectionState = recoil_1.atom({
    key: 'selectionState',
    default: new Set(),
});
exports.selectionModifiersState = recoil_1.atom({
    key: 'selectionModifiersState',
    default: {
        selectFiles: constants_1.NOOP_FUNCTION,
        toggleSelection: constants_1.NOOP_FUNCTION,
        clearSelection: constants_1.NOOP_FUNCTION,
    },
});
//
// ==== Selectors
exports.selectedFilesState = recoil_1.selector({
    key: 'selectedFilesState',
    get: function (_a) {
        var get = _a.get;
        var files = get(files_recoil_1.filesState);
        var selection = get(exports.selectionState);
        return selection_1.SelectionHelper.getSelectedFiles(files, selection);
    },
});
exports.selectionSizeState = recoil_1.selector({
    key: 'selectionSizeState',
    get: function (_a) {
        var get = _a.get;
        var selection = get(exports.selectionState);
        return selection.size;
    },
});
exports.fileSelectedState = recoil_1.selectorFamily({
    key: 'fileSelectedState',
    get: function (fileId) { return function (_a) {
        var get = _a.get;
        // We deliberately don't use `FileHelper.isSelectable` here. We want
        // the UI to represent the true state of selection. This will help users
        // see what exactly the selection is before running some code.
        return !!fileId && get(exports.selectionState).has(fileId);
    }; },
});
//# sourceMappingURL=selection.recoil.js.map