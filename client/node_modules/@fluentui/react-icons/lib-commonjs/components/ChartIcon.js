"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ChartIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1408 512h512v512h-128V731l-576 575-256-256-704 705v37h1664v128H128V128h128v1445l704-703 256 256 485-486h-293V512z" })));
    },
    displayName: 'ChartIcon',
});
exports.default = ChartIcon;
//# sourceMappingURL=ChartIcon.js.map