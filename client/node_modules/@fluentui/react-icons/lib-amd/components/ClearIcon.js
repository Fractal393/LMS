define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClearIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1115 1024l914 915-90 90-915-914-915 914-90-90 914-915L19 109l90-90 915 914 915-914 90 90-914 915z" })));
        },
        displayName: 'ClearIcon',
    });
    exports.default = ClearIcon;
});
//# sourceMappingURL=ClearIcon.js.map