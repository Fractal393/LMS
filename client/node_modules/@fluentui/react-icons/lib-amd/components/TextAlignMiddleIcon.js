define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextAlignMiddleIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 384h1792v128H128V384zm256 512h1280v128H384V896zm-256 640v-128h1792v128H128z" })));
        },
        displayName: 'TextAlignMiddleIcon',
    });
    exports.default = TextAlignMiddleIcon;
});
//# sourceMappingURL=TextAlignMiddleIcon.js.map