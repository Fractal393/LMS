"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var ImagePixelIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 256v1536H0V256h2048zm-128 128H128v512h256v256H128v512h1024v-256h256v256h256v-256h256V384zM640 896H384V640h256v256zm0 256V896h256v256H640zm512 0v256H896v-256h256zm512 0v256h-256v-256h256zm0-256h-256V640h256v256z" })));
    },
    displayName: 'ImagePixelIcon',
});
exports.default = ImagePixelIcon;
//# sourceMappingURL=ImagePixelIcon.js.map