"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line no-console
        console.error.apply(console, __spreadArrays(['[Chonky runtime error]'], args));
    };
    Logger.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line no-console
        console.warn.apply(console, __spreadArrays(['[Chonky runtime warning]'], args));
    };
    Logger.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line no-console
        console.debug.apply(console, __spreadArrays(['[Chonky runtime debug]'], args));
    };
    Logger.formatBullets = function (bullets) {
        return "\n- " + bullets.join('\n- ');
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map