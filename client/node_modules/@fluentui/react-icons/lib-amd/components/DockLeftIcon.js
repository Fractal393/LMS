define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DockLeftIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 384h2048v1152H0V384zm128 128v896h384V512H128zm1792 896V512H640v896h1280z" })));
        },
        displayName: 'DockLeftIcon',
    });
    exports.default = DockLeftIcon;
});
//# sourceMappingURL=DockLeftIcon.js.map