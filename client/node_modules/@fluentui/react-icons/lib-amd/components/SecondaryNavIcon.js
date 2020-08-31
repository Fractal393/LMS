define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SecondaryNavIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 384v128H0V384h1024zM0 896h2048v128H0V896zm1024 640v-128h1024v128H1024z" })));
        },
        displayName: 'SecondaryNavIcon',
    });
    exports.default = SecondaryNavIcon;
});
//# sourceMappingURL=SecondaryNavIcon.js.map