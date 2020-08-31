"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var TripleColumnWideIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 256h512v1536H0V256zm128 1408h256V384H128v1280zM2048 256v1536h-512V256h512zm-128 128h-256v1280h256V384zM640 256h768v1536H640V256zm128 1408h512V384H768v1280z" })));
    },
    displayName: 'TripleColumnWideIcon',
});
exports.default = TripleColumnWideIcon;
//# sourceMappingURL=TripleColumnWideIcon.js.map