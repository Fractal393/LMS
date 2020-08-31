define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CollapseMenuIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 768V640h1792v128H128zm0-640h1792v128H128V128zm0 1152v-128h1792v128H128zm0 512v-128h1792v128H128z" })));
        },
        displayName: 'CollapseMenuIcon',
    });
    exports.default = CollapseMenuIcon;
});
//# sourceMappingURL=CollapseMenuIcon.js.map