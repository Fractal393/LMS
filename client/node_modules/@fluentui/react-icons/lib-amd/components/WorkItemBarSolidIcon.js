define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkItemBarSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1280 128v1792H640V128h640z" })));
        },
        displayName: 'WorkItemBarSolidIcon',
    });
    exports.default = WorkItemBarSolidIcon;
});
//# sourceMappingURL=WorkItemBarSolidIcon.js.map