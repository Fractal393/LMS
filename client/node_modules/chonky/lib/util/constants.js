"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_FUNCTION = exports.INTENTIONAL_EMPTY_DEPS = void 0;
// Used in React hooks to indicate empty deps are intentional.
var logger_1 = require("./logger");
exports.INTENTIONAL_EMPTY_DEPS = [];
// Used in contexts that need to provide some default value for a function.
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
exports.NOOP_FUNCTION = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    logger_1.Logger.warn("The \"NOOP_FUNCTION\" from the constants module was called. " +
        "This can indicate a bug in one of the components. Supplied args:", args);
};
//# sourceMappingURL=constants.js.map