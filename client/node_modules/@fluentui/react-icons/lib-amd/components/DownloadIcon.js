define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DownloadIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 2048v-128h1152v128H384zm1197-979l-621 626-621-626 90-90 467 470V0h128v1449l467-470 90 90z" })));
        },
        displayName: 'DownloadIcon',
    });
    exports.default = DownloadIcon;
});
//# sourceMappingURL=DownloadIcon.js.map