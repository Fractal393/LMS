define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BreadcrumbIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 512h1536v128H256V512zm384 512V896h1152v128H640zm384 384v-128h768v128h-768z" })));
        },
        displayName: 'BreadcrumbIcon',
    });
    exports.default = BreadcrumbIcon;
});
//# sourceMappingURL=BreadcrumbIcon.js.map