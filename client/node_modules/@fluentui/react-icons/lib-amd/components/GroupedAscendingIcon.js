define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupedAscendingIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 128h1536v128H384V128zm128 603v1061h1408v128H384V731L91 1024 0 933l448-447 448 447-91 91-293-293zm512 677v-128h896v128h-896zm0-384V896h896v128h-896zm0-384V512h896v128h-896z" })));
        },
        displayName: 'GroupedAscendingIcon',
    });
    exports.default = GroupedAscendingIcon;
});
//# sourceMappingURL=GroupedAscendingIcon.js.map