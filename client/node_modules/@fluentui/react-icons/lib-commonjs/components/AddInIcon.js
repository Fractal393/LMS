"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var AddInIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1024 128v896h896v1024H0V128h1024zM896 1920v-768H128v768h768zm0-896V256H128v768h768zm896 128h-768v768h768v-768zm-128-768h384v128h-384v384h-128V512h-384V384h384V0h128v384z" })));
    },
    displayName: 'AddInIcon',
});
exports.default = AddInIcon;
//# sourceMappingURL=AddInIcon.js.map