"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchSpecialActionState = void 0;
var recoil_1 = require("recoil");
var constants_1 = require("../util/constants");
//
// ==== Atoms
exports.dispatchSpecialActionState = recoil_1.atom({
    key: 'dispatchSpecialActionState',
    default: constants_1.NOOP_FUNCTION,
});
//# sourceMappingURL=special-actions.recoil.js.map