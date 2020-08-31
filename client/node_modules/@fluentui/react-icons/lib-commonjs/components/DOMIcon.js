"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DOMIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1536 1280h-512v-256H640v512h384v-128h512v512h-512v-256H512V512H384V0h512v512H640v384h384V768h512v512zm-398-398v284h284V882h-284zM498 398h284V114H498v284zm640 1124v284h284v-284h-284z" })));
    },
    displayName: 'DOMIcon',
});
exports.default = DOMIcon;
//# sourceMappingURL=DOMIcon.js.map