define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapDirectionsIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 0l1024 1024-1024 1024L0 1024 1024 0zM768 1611l256 256 843-843-843-843-843 843 459 459V896h549L979 685l90-90 365 365-365 365-90-90 210-211H768v587z" })));
        },
        displayName: 'MapDirectionsIcon',
    });
    exports.default = MapDirectionsIcon;
});
//# sourceMappingURL=MapDirectionsIcon.js.map