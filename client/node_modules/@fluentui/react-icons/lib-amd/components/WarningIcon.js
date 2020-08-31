define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WarningIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 1920H0L960 0l960 1920zM207 1792h1506L960 286 207 1792zm817-1024v640H896V768h128zm-128 768h128v128H896v-128z" })));
        },
        displayName: 'WarningIcon',
    });
    exports.default = WarningIcon;
});
//# sourceMappingURL=WarningIcon.js.map