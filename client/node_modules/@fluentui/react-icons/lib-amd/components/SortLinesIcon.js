define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortLinesIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 1638l163-163 90 90-317 318L3 1565l90-90 163 163V128h128v1510zm384-358v-128h512v128H768zm0-384V768h896v128H768zm0-512h1280v128H768V384z" })));
        },
        displayName: 'SortLinesIcon',
    });
    exports.default = SortLinesIcon;
});
//# sourceMappingURL=SortLinesIcon.js.map