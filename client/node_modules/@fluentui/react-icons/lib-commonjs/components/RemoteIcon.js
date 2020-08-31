"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RemoteIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M259 733l90-90 701 701-701 701-90-90 611-611-611-611zM1789 93l-611 611 611 611-90 90-701-701L1699 3l90 90z" })));
    },
    displayName: 'RemoteIcon',
});
exports.default = RemoteIcon;
//# sourceMappingURL=RemoteIcon.js.map