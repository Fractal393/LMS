define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ForwardIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2042 1024l-941 941-90-90 787-787H0V960h1798l-787-787 90-90 941 941z" })));
        },
        displayName: 'ForwardIcon',
    });
    exports.default = ForwardIcon;
});
//# sourceMappingURL=ForwardIcon.js.map