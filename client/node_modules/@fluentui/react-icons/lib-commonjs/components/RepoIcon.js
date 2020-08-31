"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RepoIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 768h-128v1152H128V768H0V128h2048v640zm-256 0h-512v768l-256-128-256 128V768H256v1024h1536V768zm-896 561q32-16 64-31t64-33q32 17 64 32t64 32V768H896v561zM1920 256H128v384h1792V256z" })));
    },
    displayName: 'RepoIcon',
});
exports.default = RepoIcon;
//# sourceMappingURL=RepoIcon.js.map