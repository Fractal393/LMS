"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortConfigState = void 0;
var recoil_1 = require("recoil");
var sort_types_1 = require("../types/sort.types");
var file_actions_definitions_1 = require("../util/file-actions-definitions");
//
// ==== Atoms
exports.sortConfigState = recoil_1.atom({
    key: 'sortConfigState',
    default: {
        fileActionId: file_actions_definitions_1.ChonkyActions.SortFilesByName.id,
        sortKeySelector: file_actions_definitions_1.ChonkyActions.SortFilesByName.sortKeySelector,
        order: sort_types_1.SortOrder.Asc,
    },
});
//# sourceMappingURL=sort.recoil.js.map