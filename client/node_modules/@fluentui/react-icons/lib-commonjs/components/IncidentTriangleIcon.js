"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var IncidentTriangleIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 2048H0L960 128l960 1920zm-896-384H896v128h128v-128zm0-128V896H896v640h128z" })));
    },
    displayName: 'IncidentTriangleIcon',
});
exports.default = IncidentTriangleIcon;
//# sourceMappingURL=IncidentTriangleIcon.js.map