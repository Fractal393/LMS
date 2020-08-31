define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CaretSolidRightIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 0l1024 1024L640 2048V0z" })));
        },
        displayName: 'CaretSolidRightIcon',
    });
    exports.default = CaretSolidRightIcon;
});
//# sourceMappingURL=CaretSolidRightIcon.js.map