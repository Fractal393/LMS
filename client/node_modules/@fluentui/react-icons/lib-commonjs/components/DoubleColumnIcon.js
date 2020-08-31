"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DoubleColumnIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 1792V256h896v1536H0zM128 384v1280h640V384H128zm896-128h896v1536h-896V256zm768 1408V384h-640v1280h640z" })));
    },
    displayName: 'DoubleColumnIcon',
});
exports.default = DoubleColumnIcon;
//# sourceMappingURL=DoubleColumnIcon.js.map