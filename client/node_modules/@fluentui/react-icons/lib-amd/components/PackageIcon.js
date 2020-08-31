define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PackageIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 768h-128v1152H128V768H0V128h2048v640zm-256 0H256v1024h1536V768zm128-512H128v384h1792V256zm-896 1152H384v-128h640v128zm-640 256v-128h512v128H384z" })));
        },
        displayName: 'PackageIcon',
    });
    exports.default = PackageIcon;
});
//# sourceMappingURL=PackageIcon.js.map