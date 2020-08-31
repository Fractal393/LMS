define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SingleColumnIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h1920v1536H0V256zm1792 1408V384H128v1280h1664z" })));
        },
        displayName: 'SingleColumnIcon',
    });
    exports.default = SingleColumnIcon;
});
//# sourceMappingURL=SingleColumnIcon.js.map