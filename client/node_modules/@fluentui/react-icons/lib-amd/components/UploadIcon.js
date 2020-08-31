define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 0v128H384V0h1152zm45 979l-90 90-467-470v1449H896V599l-467 470-90-90 621-626 621 626z" })));
        },
        displayName: 'UploadIcon',
    });
    exports.default = UploadIcon;
});
//# sourceMappingURL=UploadIcon.js.map