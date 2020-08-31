define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToDoLogoInverseIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 512l384 384-384 384L0 896l384-384zm1280-256l384 384L896 1792l-384-384L1664 256z" })));
        },
        displayName: 'ToDoLogoInverseIcon',
    });
    exports.default = ToDoLogoInverseIcon;
});
//# sourceMappingURL=ToDoLogoInverseIcon.js.map