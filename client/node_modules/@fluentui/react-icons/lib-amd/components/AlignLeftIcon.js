define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlignLeftIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v128H0V128h2048zm0 1664H0v-128h2048v128zm0-768H0V896h2048v128zm-512-384H0V512h1536v128zm0 768H0v-128h1536v128z" })));
        },
        displayName: 'AlignLeftIcon',
    });
    exports.default = AlignLeftIcon;
});
//# sourceMappingURL=AlignLeftIcon.js.map