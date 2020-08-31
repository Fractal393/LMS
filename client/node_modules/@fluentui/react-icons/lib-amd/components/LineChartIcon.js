define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M705 978l-449 449v366h1664v128H128V129h128v1132l449-449 255 257 704-704 256 256v166l-256-256-704 704-255-257z" })));
        },
        displayName: 'LineChartIcon',
    });
    exports.default = LineChartIcon;
});
//# sourceMappingURL=LineChartIcon.js.map