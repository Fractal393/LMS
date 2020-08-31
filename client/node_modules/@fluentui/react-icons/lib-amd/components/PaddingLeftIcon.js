define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PaddingLeftIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 0v1920h-128V0h128zM0 0h128v128H0V0zm0 1792h128v128H0v-128zM0 256h128v256H0V256zm0 384h128v256H0V640zm0 384h128v256H0v-256zm0 384h128v256H0v-256zm603-512h1061v128H603l210 211-90 90-365-365 365-365 90 90-210 211z" })));
        },
        displayName: 'PaddingLeftIcon',
    });
    exports.default = PaddingLeftIcon;
});
//# sourceMappingURL=PaddingLeftIcon.js.map