define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StarburstSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1024l-384 256 96 480-480-96-256 384-256-384-480 96 96-480L0 1024l384-256-96-480 480 96L1024 0l256 384 480-96-96 480 384 256z" })));
        },
        displayName: 'StarburstSolidIcon',
    });
    exports.default = StarburstSolidIcon;
});
//# sourceMappingURL=StarburstSolidIcon.js.map