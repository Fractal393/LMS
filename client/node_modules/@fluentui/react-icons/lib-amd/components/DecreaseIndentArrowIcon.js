define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecreaseIndentArrowIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M896 896v128H250l163 163-90 90L6 960l317-317 90 90-163 163h646z" })));
        },
        displayName: 'DecreaseIndentArrowIcon',
    });
    exports.default = DecreaseIndentArrowIcon;
});
//# sourceMappingURL=DecreaseIndentArrowIcon.js.map