define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebPublishIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v1024h-128V640H128v1024h1408v128H0V128h2048zm-128 128H128v256h1792V256zm-192 870l320 319-91 91-165-165v677h-128v-677l-165 165-91-91 320-319z" })));
        },
        displayName: 'WebPublishIcon',
    });
    exports.default = WebPublishIcon;
});
//# sourceMappingURL=WebPublishIcon.js.map