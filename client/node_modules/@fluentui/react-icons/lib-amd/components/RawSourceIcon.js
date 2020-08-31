define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RawSourceIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M896 512H0V384h896v128zM384 768h896v128H384V768zm1024 0h640v128h-640V768zm640-384v128H1024V384h1024zM384 1152h1280v128H384v-128zM0 1536h1280v128H0v-128z" })));
        },
        displayName: 'RawSourceIcon',
    });
    exports.default = RawSourceIcon;
});
//# sourceMappingURL=RawSourceIcon.js.map