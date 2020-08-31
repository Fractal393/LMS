define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SquareShapeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 128v1792H128V128h1792zm-128 128H256v1536h1536V256z" })));
        },
        displayName: 'SquareShapeIcon',
    });
    exports.default = SquareShapeIcon;
});
//# sourceMappingURL=SquareShapeIcon.js.map