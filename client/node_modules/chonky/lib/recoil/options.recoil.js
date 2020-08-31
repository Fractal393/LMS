"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionState = exports.optionMapState = void 0;
var recoil_1 = require("recoil");
//
// ==== Atoms
exports.optionMapState = recoil_1.atom({
    key: 'optionMapState',
    default: {},
});
//
// ==== Selectors
exports.optionState = recoil_1.selectorFamily({
    key: 'optionEnabledState',
    get: function (optionId) { return function (_a) {
        var get = _a.get;
        return get(exports.optionMapState)[optionId];
    }; },
});
//# sourceMappingURL=options.recoil.js.map