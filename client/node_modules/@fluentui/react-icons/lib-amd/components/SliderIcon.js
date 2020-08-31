define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SliderIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1024H890q-12 56-41 103t-70 81-94 53-109 19q-57 0-109-19t-93-53-71-81-41-103H0V896h262q12-56 41-103t70-81 94-53 109-19q57 0 109 19t93 53 71 81 41 103h1158v128zM576 1152q40 0 75-15t61-41 41-61 15-75q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75q0 40 15 75t41 61 61 41 75 15z" })));
        },
        displayName: 'SliderIcon',
    });
    exports.default = SliderIcon;
});
//# sourceMappingURL=SliderIcon.js.map