define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortDownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1364 1459l91 90-493 493-494-493 91-90 338 338L896 3h128l1 1795 339-339z" })));
        },
        displayName: 'SortDownIcon',
    });
    exports.default = SortDownIcon;
});
//# sourceMappingURL=SortDownIcon.js.map