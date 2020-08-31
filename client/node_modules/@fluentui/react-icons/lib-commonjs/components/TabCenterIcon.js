"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var TabCenterIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 640v1280H512v-512H128V128h1408v512h384zm-128 1152v-768H640v768h1152zM512 1280V640h896V512H256v768h256zM256 256v128h1152V256H256zm1536 512H640v128h1152V768z" })));
    },
    displayName: 'TabCenterIcon',
});
exports.default = TabCenterIcon;
//# sourceMappingURL=TabCenterIcon.js.map