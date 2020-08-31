define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HexagonIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2024 960l-497 960H521L24 960 521 0h1006l497 960zm-144 0l-431-832H599L168 960l431 832h850l431-832z" })));
        },
        displayName: 'HexagonIcon',
    });
    exports.default = HexagonIcon;
});
//# sourceMappingURL=HexagonIcon.js.map