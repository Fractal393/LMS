"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RepoSolidIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1280 768h640v1152H128V768h640v768l256-128 256 128V768zm768-640v512H0V128h2048z" })));
    },
    displayName: 'RepoSolidIcon',
});
exports.default = RepoSolidIcon;
//# sourceMappingURL=RepoSolidIcon.js.map