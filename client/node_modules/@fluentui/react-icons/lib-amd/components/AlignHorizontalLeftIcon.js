define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlignHorizontalLeftIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 0h128v2048H0V0zm1408 896H256V384h1152v512zm-128-384H384v256h896V512zm640 640v512H256v-512h1664zm-128 128H384v256h1408v-256z" })));
        },
        displayName: 'AlignHorizontalLeftIcon',
    });
    exports.default = AlignHorizontalLeftIcon;
});
//# sourceMappingURL=AlignHorizontalLeftIcon.js.map