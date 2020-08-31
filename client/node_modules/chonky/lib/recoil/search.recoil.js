"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFilterState = exports.searchBarVisibleState = exports.searchBarEnabledState = void 0;
var recoil_1 = require("recoil");
//
// ==== Atoms
exports.searchBarEnabledState = recoil_1.atom({
    key: 'searchBarEnabledState',
    default: false,
});
exports.searchBarVisibleState = recoil_1.atom({
    key: 'searchBarVisibleState',
    default: false,
});
exports.searchFilterState = recoil_1.atom({
    key: 'searchFilterState',
    default: '',
});
//# sourceMappingURL=search.recoil.js.map