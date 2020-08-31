define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortUpIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1453 499l-90 90-338-337-1 1796H896l1-1799-340 340-90-90L960 6l493 493z" })));
        },
        displayName: 'SortUpIcon',
    });
    exports.default = SortUpIcon;
});
//# sourceMappingURL=SortUpIcon.js.map