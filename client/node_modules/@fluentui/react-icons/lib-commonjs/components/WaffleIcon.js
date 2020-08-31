"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var WaffleIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M384 640V384h256v256H384zm512 0V384h256v256H896zm512-256h256v256h-256V384zM384 1152V896h256v256H384zm512 0V896h256v256H896zm512 0V896h256v256h-256zM384 1664v-256h256v256H384zm512 0v-256h256v256H896zm512 0v-256h256v256h-256z" })));
    },
    displayName: 'WaffleIcon',
});
exports.default = WaffleIcon;
//# sourceMappingURL=WaffleIcon.js.map