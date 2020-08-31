"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var LineThicknessIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384v128H0V384h2048zM0 768h2048v256H0V768zm0 512h2048v384H0v-384z" })));
    },
    displayName: 'LineThicknessIcon',
});
exports.default = LineThicknessIcon;
//# sourceMappingURL=LineThicknessIcon.js.map