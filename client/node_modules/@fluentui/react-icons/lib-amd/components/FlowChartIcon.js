define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FlowChartIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1408 1152h640v640h-640v-256H992l-416 416-480-480 416-416V640H256V0h640v640H640v416l352 352h416v-256zM384 128v384h384V128H384zm192 1632l288-288-288-288-288 288 288 288zm1344-96v-384h-384v384h384z" })));
        },
        displayName: 'FlowChartIcon',
    });
    exports.default = FlowChartIcon;
});
//# sourceMappingURL=FlowChartIcon.js.map