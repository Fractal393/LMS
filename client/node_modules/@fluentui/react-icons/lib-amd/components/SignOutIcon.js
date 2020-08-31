define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SignOutIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1792h896v128H128V0h1024v128H256v1664zm1679-832l-487 488-80-80 345-344H640V896h1073l-345-344 80-80 487 488z" })));
        },
        displayName: 'SignOutIcon',
    });
    exports.default = SignOutIcon;
});
//# sourceMappingURL=SignOutIcon.js.map