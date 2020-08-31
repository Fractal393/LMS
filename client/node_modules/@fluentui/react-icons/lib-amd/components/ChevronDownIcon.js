define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChevronDownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1939 467l90 90-1005 1005L19 557l90-90 915 915 915-915z" })));
        },
        displayName: 'ChevronDownIcon',
    });
    exports.default = ChevronDownIcon;
});
//# sourceMappingURL=ChevronDownIcon.js.map