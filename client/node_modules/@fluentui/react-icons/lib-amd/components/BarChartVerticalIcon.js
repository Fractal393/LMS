define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarChartVerticalIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M768 512v1152H384V512h384zM640 1536V640H512v896h128zm640-768v896H896V768h384zm-128 768V896h-128v640h128zm640-1280v1408h-384V256h384zm-128 1280V384h-128v1152h128zM256 1792h1664v128H128V128h128v1664z" })));
        },
        displayName: 'BarChartVerticalIcon',
    });
    exports.default = BarChartVerticalIcon;
});
//# sourceMappingURL=BarChartVerticalIcon.js.map