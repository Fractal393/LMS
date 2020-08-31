define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 0h1024v1024h-128V219L93 2045l-90-90L1829 128h-805V0z" })));
        },
        displayName: 'GoIcon',
    });
    exports.default = GoIcon;
});
//# sourceMappingURL=GoIcon.js.map