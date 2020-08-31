"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var AddIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 960v128h-960v960H960v-960H0V960h960V0h128v960h960z" })));
    },
    displayName: 'AddIcon',
});
exports.default = AddIcon;
//# sourceMappingURL=AddIcon.js.map