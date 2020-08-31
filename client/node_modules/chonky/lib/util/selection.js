"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionUtil = exports.SelectionHelper = exports.useSelection = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../recoil/file-actions.recoil");
var file_actions_definitions_1 = require("./file-actions-definitions");
var file_helper_1 = require("./file-helper");
exports.useSelection = function (files, disableSelection) {
    var dispatchFileAction = recoil_1.useRecoilValue(file_actions_recoil_1.dispatchFileActionState);
    // Create React-managed state for components that need to re-render on state change.
    var _a = react_1.useState(new Set()), selection = _a[0], setSelection = _a[1];
    // Dispatch an action every time selection changes.
    var lastSelectionSizeForAction = react_1.useRef(0);
    react_1.useEffect(function () {
        var selectedFiles = SelectionHelper.getSelectedFiles(files, selection);
        // We want to solve two problems here - first, we don't want to dispatch a
        // selection action when Chonky is first initialized. We also don't want to
        // dispatch an action if the current selection and the previous selection
        // are empty (this can happen because Recoil can sometimes trigger updates
        // even if object reference did not change).
        if (lastSelectionSizeForAction.current === selectedFiles.length &&
            selectedFiles.length === 0) {
            return;
        }
        lastSelectionSizeForAction.current = selectedFiles.length;
        dispatchFileAction({
            actionId: file_actions_definitions_1.ChonkyActions.ChangeSelection.id,
            files: selectedFiles,
        });
    }, [files, dispatchFileAction, selection]);
    // Pre-compute selection size for components that are only interested in the
    // number of selected files but not the actual files
    var selectionSize = react_1.useMemo(function () { return SelectionHelper.getSelectionSize(files, selection); }, [files, selection]);
    // Create callbacks for updating selection. These will update the React
    // state `selection`, causing re-renders. This is intentional.
    var selectionModifiers = useSelectionModifiers(disableSelection, setSelection);
    // Create selection ref for functions that need selection but shouldn't re-render
    var selectionUtilRef = react_1.useRef(new UpdateableSelectionUtil(files, selection));
    react_1.useEffect(function () {
        selectionUtilRef.current.update(files, selection);
    }, [files, selection]);
    return {
        selection: selection,
        selectionSize: selectionSize,
        selectionUtilRef: selectionUtilRef,
        selectionModifiers: selectionModifiers,
    };
};
var useSelectionModifiers = function (disableSelection, setSelection) {
    var selectFiles = react_1.useCallback(function (fileIds, reset) {
        if (reset === void 0) { reset = true; }
        if (disableSelection)
            return;
        setSelection(function (selection) {
            var newSelection = reset
                ? new Set()
                : new Set(selection);
            for (var _i = 0, fileIds_1 = fileIds; _i < fileIds_1.length; _i++) {
                var fileId = fileIds_1[_i];
                newSelection.add(fileId);
            }
            return newSelection;
        });
    }, [disableSelection, setSelection]);
    var toggleSelection = react_1.useCallback(function (fileId, exclusive) {
        if (exclusive === void 0) { exclusive = false; }
        if (disableSelection)
            return;
        setSelection(function (selection) {
            var newSelection = exclusive
                ? new Set()
                : new Set(selection);
            if (selection.has(fileId)) {
                newSelection.delete(fileId);
            }
            else {
                newSelection.add(fileId);
            }
            return newSelection;
        });
    }, [disableSelection, setSelection]);
    var clearSelection = react_1.useCallback(function () {
        if (disableSelection)
            return;
        setSelection(function (oldSelection) {
            if (oldSelection.size === 0)
                return oldSelection;
            return new Set();
        });
    }, [disableSelection, setSelection]);
    var selectionModifiers = react_1.useMemo(function () { return ({
        selectFiles: selectFiles,
        toggleSelection: toggleSelection,
        clearSelection: clearSelection,
    }); }, [selectFiles, toggleSelection, clearSelection]);
    return selectionModifiers;
};
/**
 * This helper relies on the `files` and `selection` objects to be passed from the
 * outside. It is safe to use in React components because it doesn't have any
 * internal state, and all methods are static.
 */
var SelectionHelper = /** @class */ (function () {
    function SelectionHelper() {
    }
    SelectionHelper.getSelectedFiles = function (files, selection) {
        var filters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            filters[_i - 2] = arguments[_i];
        }
        var selectedFiles = files.filter(function (file) { return file_helper_1.FileHelper.isSelectable(file) && selection.has(file.id); });
        return filters.reduce(function (prevFiles, filter) { return (filter ? prevFiles.filter(filter) : prevFiles); }, selectedFiles);
    };
    SelectionHelper.getSelectionSize = function (files, selection) {
        var filters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            filters[_i - 2] = arguments[_i];
        }
        return SelectionHelper.getSelectedFiles.apply(SelectionHelper, __spreadArrays([files, selection], filters)).length;
    };
    SelectionHelper.isSelected = function (selection, file) {
        return file_helper_1.FileHelper.isSelectable(file) && selection.has(file.id);
    };
    return SelectionHelper;
}());
exports.SelectionHelper = SelectionHelper;
/**
 * This `SelectionUtil` contains an internal reference to `files` and `selection`
 * objects. It is exposed via a React context, and is meant to be used in functions
 * that need to access selection WITHOUT triggering re-renders.
 */
var SelectionUtil = /** @class */ (function () {
    function SelectionUtil(files, selection) {
        if (files === void 0) { files = []; }
        if (selection === void 0) { selection = new Set(); }
        this.protectedUpdate(files, selection);
    }
    SelectionUtil.prototype.protectedUpdate = function (files, selection) {
        this.files = files;
        this.selection = selection;
    };
    SelectionUtil.prototype.getSelection = function () {
        return this.selection;
    };
    SelectionUtil.prototype.getSelectedFiles = function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        return SelectionHelper.getSelectedFiles.apply(SelectionHelper, __spreadArrays([this.files, this.selection], filters));
    };
    SelectionUtil.prototype.getSelectionSize = function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        return SelectionHelper.getSelectionSize.apply(SelectionHelper, __spreadArrays([this.files, this.selection], filters));
    };
    SelectionUtil.prototype.isSelected = function (file) {
        return SelectionHelper.isSelected(this.selection, file);
    };
    return SelectionUtil;
}());
exports.SelectionUtil = SelectionUtil;
var UpdateableSelectionUtil = /** @class */ (function (_super) {
    __extends(UpdateableSelectionUtil, _super);
    function UpdateableSelectionUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateableSelectionUtil.prototype.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.protectedUpdate.apply(this, args);
    };
    return UpdateableSelectionUtil;
}(SelectionUtil));
//# sourceMappingURL=selection.js.map