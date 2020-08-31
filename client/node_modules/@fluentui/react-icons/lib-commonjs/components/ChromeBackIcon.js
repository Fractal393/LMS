"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ChromeBackIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 1024H392l674 674-144 145L0 922 922 0l144 145-674 674h1656v205z" })));
    },
    displayName: 'ChromeBackIcon',
});
exports.default = ChromeBackIcon;
//# sourceMappingURL=ChromeBackIcon.js.map