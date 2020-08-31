"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileBrowserHandle = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var selection_recoil_1 = require("../recoil/selection.recoil");
var hooks_helpers_1 = require("./hooks-helpers");
exports.useFileBrowserHandle = function (ref, selectionModifiers) {
    var selectionRef = hooks_helpers_1.useInstanceVariable(recoil_1.useRecoilValue(selection_recoil_1.selectionState));
    react_1.useImperativeHandle(ref, function () { return ({
        getFileSelection: function () { return new Set(selectionRef.current); },
        setFileSelection: function (selection, reset) {
            if (reset === void 0) { reset = true; }
            return selectionModifiers.selectFiles(Array.from(selection), reset);
        },
    }); }, [selectionModifiers, selectionRef]);
};
//# sourceMappingURL=file-browser-handle.js.map