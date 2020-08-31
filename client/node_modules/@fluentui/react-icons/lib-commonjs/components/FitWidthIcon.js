"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var FitWidthIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 256h2048v1536H0V256zm1920 1408V384H128v1280h1792zM555 1109l-86 86-236-235 236-235 86 86-85 85h426v128H470l85 85zm938 0l85-85h-426V896h426l-85-85 86-86 236 235-236 235-86-86z" })));
    },
    displayName: 'FitWidthIcon',
});
exports.default = FitWidthIcon;
//# sourceMappingURL=FitWidthIcon.js.map