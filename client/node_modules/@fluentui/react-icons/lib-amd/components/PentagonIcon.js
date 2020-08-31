define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PentagonIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2042 723l-389 1197H395L6 723 1024 18l1018 705zm-151 51l-867-600-867 600 331 1018h1072l331-1018z" })));
        },
        displayName: 'PentagonIcon',
    });
    exports.default = PentagonIcon;
});
//# sourceMappingURL=PentagonIcon.js.map