"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var TrimEndIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M384 0h1408v2048H384v-128h768V128H384V0zm1280 1920V128h-384v1792h384z" })));
    },
    displayName: 'TrimEndIcon',
});
exports.default = TrimEndIcon;
//# sourceMappingURL=TrimEndIcon.js.map