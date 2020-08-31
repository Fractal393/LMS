"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var BookmarksIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 512V384h128v128H0zm384-128h1664v128H384V384zM0 1664v-128h128v128H0zm384 0v-128h1664v128H384zm512-768V768h1152v128H896zm512 384v-128h640v128h-640z" })));
    },
    displayName: 'BookmarksIcon',
});
exports.default = BookmarksIcon;
//# sourceMappingURL=BookmarksIcon.js.map