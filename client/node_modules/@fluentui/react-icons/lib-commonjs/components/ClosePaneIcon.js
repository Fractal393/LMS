"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ClosePaneIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 384h2048v1152H0V384zm128 128v896h1280V512H128zm1792 896V512h-384v896h384zM989 643l317 317-317 317-90-90 162-163H640V896h421L899 733l90-90z" })));
    },
    displayName: 'ClosePaneIcon',
});
exports.default = ClosePaneIcon;
//# sourceMappingURL=ClosePaneIcon.js.map