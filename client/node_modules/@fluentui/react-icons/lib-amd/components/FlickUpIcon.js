define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FlickUpIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 1024L0 0h2048L1024 1024z" })));
        },
        displayName: 'FlickUpIcon',
    });
    exports.default = FlickUpIcon;
});
//# sourceMappingURL=FlickUpIcon.js.map