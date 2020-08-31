define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WarningSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M960 0l960 1920H0L960 0zm64 1664v-128H896v128h128zm-128-256h128V640H896v768z" })));
        },
        displayName: 'WarningSolidIcon',
    });
    exports.default = WarningSolidIcon;
});
//# sourceMappingURL=WarningSolidIcon.js.map