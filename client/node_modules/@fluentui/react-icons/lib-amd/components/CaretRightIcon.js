define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CaretRightIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M506-26l1050 1050L506 2074V-26zm128 308v1484l741-742-741-742z" })));
        },
        displayName: 'CaretRightIcon',
    });
    exports.default = CaretRightIcon;
});
//# sourceMappingURL=CaretRightIcon.js.map