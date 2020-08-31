define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HardDriveIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1856 640q40 0 75 15t61 41 41 61 15 75v576H0V832q0-40 15-75t41-61 61-41 75-15h1664zm64 192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v448h1792V832zm-256 64h128v128h-128V896zm-256 0h128v128h-128V896z" })));
        },
        displayName: 'HardDriveIcon',
    });
    exports.default = HardDriveIcon;
});
//# sourceMappingURL=HardDriveIcon.js.map