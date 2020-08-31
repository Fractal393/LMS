"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var FullWidthIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 256v1536H0V256h2048zm-128 128h-384v256h-128V384H640v256H512V384H128v1280h384v-128h128v128h768v-128h128v128h384V384zM512 768h128v256H512V768zm0 384h128v256H512v-256zm896-384h128v256h-128V768zm0 384h128v256h-128v-256z" })));
    },
    displayName: 'FullWidthIcon',
});
exports.default = FullWidthIcon;
//# sourceMappingURL=FullWidthIcon.js.map