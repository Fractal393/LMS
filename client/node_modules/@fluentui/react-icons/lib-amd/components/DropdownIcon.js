define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropdownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h2048v1408H0V256zm1920 1280V384H128v1152h1792zm-128-640l-256 256-256-256h512z" })));
        },
        displayName: 'DropdownIcon',
    });
    exports.default = DropdownIcon;
});
//# sourceMappingURL=DropdownIcon.js.map