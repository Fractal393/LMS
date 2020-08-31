define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CombineIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 896v128h-677l210 211-90 90-365-365 365-365 90 90-210 211h677zM467 685l90-90 365 365-365 365-90-90 210-211H0V896h677L467 685z" })));
        },
        displayName: 'CombineIcon',
    });
    exports.default = CombineIcon;
});
//# sourceMappingURL=CombineIcon.js.map