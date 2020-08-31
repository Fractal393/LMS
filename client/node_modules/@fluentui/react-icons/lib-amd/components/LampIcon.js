define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LampIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 1920h384v128H512v-128h384V896H231L530 0h860l299 896h-409v192q0 26-19 45t-45 19q-26 0-45-19t-19-45V896h-128v1024zM409 768h1102l-213-640H622L409 768z" })));
        },
        displayName: 'LampIcon',
    });
    exports.default = LampIcon;
});
//# sourceMappingURL=LampIcon.js.map