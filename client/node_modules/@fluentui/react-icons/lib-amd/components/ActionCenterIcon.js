define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionCenterIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 0h2048v1664h-640l-384 384-384-384H0V0zm1920 1536V128H128v1408h565l331 331 331-331h565z" })));
        },
        displayName: 'ActionCenterIcon',
    });
    exports.default = ActionCenterIcon;
});
//# sourceMappingURL=ActionCenterIcon.js.map