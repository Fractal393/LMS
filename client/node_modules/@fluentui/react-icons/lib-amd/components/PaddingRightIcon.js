define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PaddingRightIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 0v1920h128V0H0zm2048 0h-128v128h128V0zm0 1792h-128v128h128v-128zm0-1536h-128v256h128V256zm0 384h-128v256h128V640zm0 384h-128v256h128v-256zm0 384h-128v256h128v-256zm-603-512H384v128h1061l-210 211 90 90 365-365-365-365-90 90 210 211z" })));
        },
        displayName: 'PaddingRightIcon',
    });
    exports.default = PaddingRightIcon;
});
//# sourceMappingURL=PaddingRightIcon.js.map