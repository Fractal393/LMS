"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotkeyListener = void 0;
var hotkeys_js_1 = __importDefault(require("hotkeys-js"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
exports.HotkeyListener = react_1.default.memo(function (props) {
    var fileActionId = props.fileActionId;
    var fileAction = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionDataState(fileActionId));
    var requestFileAction = recoil_1.useRecoilValue(file_actions_recoil_1.requestFileActionState);
    react_1.useEffect(function () {
        if (!fileAction || !fileAction.hotkeys || fileAction.hotkeys.length === 0) {
            return;
        }
        var hotkeysStr = fileAction.hotkeys.join(',');
        var hotkeyCallback = function (event) {
            event.preventDefault();
            requestFileAction(fileAction.id);
        };
        hotkeys_js_1.default(hotkeysStr, hotkeyCallback);
        return function () { return hotkeys_js_1.default.unbind(hotkeysStr, hotkeyCallback); };
    }, [fileAction, requestFileAction]);
    return null;
});
//# sourceMappingURL=HotkeyListener.js.map