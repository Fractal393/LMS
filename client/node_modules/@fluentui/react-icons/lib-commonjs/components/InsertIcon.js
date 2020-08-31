"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var InsertIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 0v896H640V0h1408zm-128 128H768v640h1152V128zM640 1152h1408v896H640v-896zm128 768h1152v-640H768v640zM109 659l366 365-366 365-90-90 274-275L19 749l90-90z" })));
    },
    displayName: 'InsertIcon',
});
exports.default = InsertIcon;
//# sourceMappingURL=InsertIcon.js.map