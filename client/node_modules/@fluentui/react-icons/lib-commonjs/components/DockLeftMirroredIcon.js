"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var DockLeftMirroredIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384H0v1152h2048V384zm-128 128v896h-384V512h384zM128 1408V512h1280v896H128z" })));
    },
    displayName: 'DockLeftMirroredIcon',
});
exports.default = DockLeftMirroredIcon;
//# sourceMappingURL=DockLeftMirroredIcon.js.map