define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextAlignBottomIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 896h1792v128H128V896zm256 512h1280v128H384v-128zm-256 640v-128h1792v128H128z" })));
        },
        displayName: 'TextAlignBottomIcon',
    });
    exports.default = TextAlignBottomIcon;
});
//# sourceMappingURL=TextAlignBottomIcon.js.map