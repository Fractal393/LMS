"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var CubeShapeIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1792 569v1038l-832 417-832-417V569l832-417 832 417zM960 296L335 608l625 312 625-312-625-312zM256 1528l640 321v-817L256 711v817zm1408 0V711l-640 321v817l640-321z" })));
    },
    displayName: 'CubeShapeIcon',
});
exports.default = CubeShapeIcon;
//# sourceMappingURL=CubeShapeIcon.js.map