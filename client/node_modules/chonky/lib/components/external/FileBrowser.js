"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.FileBrowser = void 0;
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var file_actions_definitions_1 = require("../../util/file-actions-definitions");
var validation_1 = require("../../util/validation");
var ChonkyBusinessLogic_1 = require("../internal/ChonkyBusinessLogic");
var ChonkyPresentationLayer_1 = require("../internal/ChonkyPresentationLayer");
// if (process.env.NODE_ENV === 'development') {
//     const whyDidYouRender = require('@welldone-software/why-did-you-render');
//     whyDidYouRender(React, {
//         trackAllPureComponents: true,
//     });
// }
exports.FileBrowser = react_1.default.forwardRef(function (props, ref) {
    var files = props.files, children = props.children;
    // ==== Default values assignment
    var folderChain = props.folderChain ? props.folderChain : null;
    var fileActions = props.fileActions ? props.fileActions : [];
    var disableDefaultFileActions = !!props.disableDefaultFileActions;
    // ==== Validation of the most important props
    var _a = validation_1.useFileArrayValidation(files, folderChain), cleanFiles = _a.cleanFiles, cleanFolderChain = _a.cleanFolderChain, fileArrayErrors = _a.errorMessages;
    var _b = validation_1.useFileActionsValidation(fileActions, file_actions_definitions_1.DefaultFileActions, !disableDefaultFileActions), cleanFileActions = _b.cleanFileActions, fileActionsErrors = _b.errorMessages;
    var validationErrors = __spreadArrays(fileArrayErrors, fileActionsErrors);
    var businessLogicProps = __assign(__assign({}, props), { files: cleanFiles, folderChain: cleanFolderChain, fileActions: cleanFileActions });
    return (react_1.default.createElement(recoil_1.RecoilRoot, null,
        react_1.default.createElement(ChonkyBusinessLogic_1.ChonkyBusinessLogic, __assign({ ref: ref }, businessLogicProps)),
        react_1.default.createElement(ChonkyPresentationLayer_1.ChonkyPresentationLayer, { validationErrors: validationErrors }, children)));
});
//# sourceMappingURL=FileBrowser.js.map