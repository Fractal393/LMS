define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1965 1101l-941 941-941-941 90-90 787 787V0h128v1798l787-787 90 90z" })));
        },
        displayName: 'DownIcon',
    });
    exports.default = DownIcon;
});
//# sourceMappingURL=DownIcon.js.map