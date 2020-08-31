"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ScatterChartIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M256 128v1664h1664v128H128V128h128zm1536 128v256h-256V256h256zM768 384v256H512V384h256zm512 384v256h-256V768h256zm-512 512v256H512v-256h256zm896-128h256v256h-256v-256z" })));
    },
    displayName: 'ScatterChartIcon',
});
exports.default = ScatterChartIcon;
//# sourceMappingURL=ScatterChartIcon.js.map