define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpandMenuIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 128h1792v640H128V128zm0 1664v-640h1792v640H128z" })));
        },
        displayName: 'ExpandMenuIcon',
    });
    exports.default = ExpandMenuIcon;
});
//# sourceMappingURL=ExpandMenuIcon.js.map