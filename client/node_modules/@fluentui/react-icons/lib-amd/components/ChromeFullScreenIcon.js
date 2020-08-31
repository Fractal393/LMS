define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChromeFullScreenIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 0v819h-205V350L350 1843h469v205H0v-819h205v469L1698 205h-469V0h819z" })));
        },
        displayName: 'ChromeFullScreenIcon',
    });
    exports.default = ChromeFullScreenIcon;
});
//# sourceMappingURL=ChromeFullScreenIcon.js.map