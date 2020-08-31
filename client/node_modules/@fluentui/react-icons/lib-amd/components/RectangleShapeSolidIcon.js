define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RectangleShapeSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 384v1280H0V384h2048z" })));
        },
        displayName: 'RectangleShapeSolidIcon',
    });
    exports.default = RectangleShapeSolidIcon;
});
//# sourceMappingURL=RectangleShapeSolidIcon.js.map