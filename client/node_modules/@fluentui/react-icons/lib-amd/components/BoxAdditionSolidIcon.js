define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxAdditionSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 0v1920H0V0h1920zm-384 896h-512V384H896v512H384v128h512v512h128v-512h512V896z" })));
        },
        displayName: 'BoxAdditionSolidIcon',
    });
    exports.default = BoxAdditionSolidIcon;
});
//# sourceMappingURL=BoxAdditionSolidIcon.js.map