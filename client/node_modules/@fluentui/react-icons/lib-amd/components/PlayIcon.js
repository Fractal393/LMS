define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 1024L512 1920V128l1280 896zM640 1674l929-650-929-650v1300z" })));
        },
        displayName: 'PlayIcon',
    });
    exports.default = PlayIcon;
});
//# sourceMappingURL=PlayIcon.js.map