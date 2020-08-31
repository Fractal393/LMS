"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RedeployIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M960 870l301 301-90 90-147-146v677H896v-677l-147 146-90-90 301-301zM128 128h512v512H128V128zm640 0h512v512H768V128zm1152 0v512h-512V128h512z" })));
    },
    displayName: 'RedeployIcon',
});
exports.default = RedeployIcon;
//# sourceMappingURL=RedeployIcon.js.map