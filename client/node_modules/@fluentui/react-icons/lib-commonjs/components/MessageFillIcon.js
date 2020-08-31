"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var MessageFillIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v1408H731l-475 475v-475H0V128h2048z" })));
    },
    displayName: 'MessageFillIcon',
});
exports.default = MessageFillIcon;
//# sourceMappingURL=MessageFillIcon.js.map