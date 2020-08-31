"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DuplicateRowIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1664 768h384v768H384v-384H0V384h1664v384zM384 1024V768h1152V512H128v512h256zm1536 384V896H512v512h1408z" })));
    },
    displayName: 'DuplicateRowIcon',
});
exports.default = DuplicateRowIcon;
//# sourceMappingURL=DuplicateRowIcon.js.map