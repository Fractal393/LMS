define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarChartVerticalFillIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1280 768v896H896V768h384zm512-512v1408h-384V256h384zM256 1792h1664v128H128V128h128v1664zM768 512v1152H384V512h384z" })));
        },
        displayName: 'BarChartVerticalFillIcon',
    });
    exports.default = BarChartVerticalFillIcon;
});
//# sourceMappingURL=BarChartVerticalFillIcon.js.map