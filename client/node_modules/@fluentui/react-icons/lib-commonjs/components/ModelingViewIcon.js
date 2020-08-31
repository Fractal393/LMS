"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ModelingViewIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 896h-896V384H512v256h384v896H512v256h640v-640h896v896h-896v-128H384v-384H0V640h384V256h768V0h896v896zm-768-768v128h640V128h-640zm0 256v384h640V384h-640zm0 896v128h640v-128h-640zm0 256v384h640v-384h-640zm-512-128v-384H128v384h640zm0-640H128v128h640V768z" })));
    },
    displayName: 'ModelingViewIcon',
});
exports.default = ModelingViewIcon;
//# sourceMappingURL=ModelingViewIcon.js.map