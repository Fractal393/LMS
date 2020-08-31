define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackedBarChartIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1919 1792v128H128V128h128v256h1024v512H256v128h1536v512H256v256h1663zM768 512v256h384V512H768zm-512 0v256h384V512H256zm768 640v256h640v-256h-640zm-768 0v256h640v-256H256z" })));
        },
        displayName: 'StackedBarChartIcon',
    });
    exports.default = StackedBarChartIcon;
});
//# sourceMappingURL=StackedBarChartIcon.js.map