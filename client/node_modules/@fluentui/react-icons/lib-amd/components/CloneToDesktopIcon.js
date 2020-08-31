define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CloneToDesktopIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 1536h256v128H640v-128h256v-128H0V256h1920v768h-128V384H128v896h1408v128h-512v128zm1021 93l-317 317-317-317 90-90 163 162v-549h128v549l163-162 90 90z" })));
        },
        displayName: 'CloneToDesktopIcon',
    });
    exports.default = CloneToDesktopIcon;
});
//# sourceMappingURL=CloneToDesktopIcon.js.map