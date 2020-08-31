define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoMirroredIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1027 0H3v1024h128V219l1827 1826 90-90L222 128h805V0z" })));
        },
        displayName: 'GoMirroredIcon',
    });
    exports.default = GoMirroredIcon;
});
//# sourceMappingURL=GoMirroredIcon.js.map