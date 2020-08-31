define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckboxIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 0v2048H0V0h2048zm-128 128H128v1792h1792V128z" })));
        },
        displayName: 'CheckboxIcon',
    });
    exports.default = CheckboxIcon;
});
//# sourceMappingURL=CheckboxIcon.js.map