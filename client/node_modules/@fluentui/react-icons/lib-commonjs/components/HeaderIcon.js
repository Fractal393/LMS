"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var HeaderIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M128 0h1792v2048H128V0zm1664 1920V128H256v1792h1536zM1664 256v512H384V256h1280zm-128 384V384H512v256h1024z" })));
    },
    displayName: 'HeaderIcon',
});
exports.default = HeaderIcon;
//# sourceMappingURL=HeaderIcon.js.map