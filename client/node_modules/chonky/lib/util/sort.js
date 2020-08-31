"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileSorting = void 0;
var fast_sort_1 = __importDefault(require("fast-sort"));
var react_1 = require("react");
var recoil_1 = require("recoil");
var options_recoil_1 = require("../recoil/options.recoil");
var sort_recoil_1 = require("../recoil/sort.recoil");
var sort_types_1 = require("../types/sort.types");
var file_actions_definitions_1 = require("./file-actions-definitions");
var file_helper_1 = require("./file-helper");
exports.useFileSorting = function (files) {
    var sortConfig = recoil_1.useRecoilValue(sort_recoil_1.sortConfigState);
    var showFolderFirstState = recoil_1.useRecoilValue(options_recoil_1.optionState(file_actions_definitions_1.ChonkyActions.ToggleShowFoldersFirst.option.id));
    var sortedFiles = react_1.useMemo(function () {
        var sortFunctions = [];
        if (showFolderFirstState) {
            sortFunctions.push({ desc: file_helper_1.FileHelper.isDirectory });
        }
        if (sortConfig.order === sort_types_1.SortOrder.Asc) {
            sortFunctions.push({ asc: sortConfig.sortKeySelector });
        }
        else {
            sortFunctions.push({ desc: sortConfig.sortKeySelector });
        }
        sortFunctions.push({ asc: file_actions_definitions_1.ChonkyActions.SortFilesByName.sortKeySelector });
        // !!! We create a new array because by default `fast-sort` mutates the array!
        return fast_sort_1.default(__spreadArrays(files)).by(sortFunctions);
    }, [files, sortConfig, showFolderFirstState]);
    return sortedFiles;
};
//# sourceMappingURL=sort.js.map