"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var AlignJustifyIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v128H0V128h2048zM0 1664h2048v128H0v-128zm0-768h2048v128H0V896zm0-384h2048v128H0V512zm0 768h2048v128H0v-128z" })));
    },
    displayName: 'AlignJustifyIcon',
});
exports.default = AlignJustifyIcon;
//# sourceMappingURL=AlignJustifyIcon.js.map