define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayReverseIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 128v1792L256 1024l1280-896zm-128 246l-929 650 929 650V374z" })));
        },
        displayName: 'PlayReverseIcon',
    });
    exports.default = PlayReverseIcon;
});
//# sourceMappingURL=PlayReverseIcon.js.map