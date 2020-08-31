"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var StatusCircleInfoIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M896 896h128v640H896V896zm128-256v128H896V640h128z" })));
    },
    displayName: 'StatusCircleInfoIcon',
});
exports.default = StatusCircleInfoIcon;
//# sourceMappingURL=StatusCircleInfoIcon.js.map