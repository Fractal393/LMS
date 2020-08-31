"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DeviceRunIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M128 384v896h1024v128h-128v128h128v128H640v-128h256v-128H0V256h1920v1093l-128-76V384H128zm1152 768l747 448-747 448v-896zm128 226v444l370-222-370-222z" })));
    },
    displayName: 'DeviceRunIcon',
});
exports.default = DeviceRunIcon;
//# sourceMappingURL=DeviceRunIcon.js.map