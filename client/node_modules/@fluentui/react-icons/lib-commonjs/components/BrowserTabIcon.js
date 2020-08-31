"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var BrowserTabIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1792 256v1792H128V0h896v256h768zm-128 128H896V128H256v1792h1408V384z" })));
    },
    displayName: 'BrowserTabIcon',
});
exports.default = BrowserTabIcon;
//# sourceMappingURL=BrowserTabIcon.js.map