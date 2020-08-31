define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1606 1166q58 114 58 242 0 88-23 170t-64 153-100 129-130 100-153 65-170 23q-88 0-170-23t-153-64-129-100-100-130-65-153-23-170q0-127 56-241L1019 0l587 1166z" })));
        },
        displayName: 'DropIcon',
    });
    exports.default = DropIcon;
});
//# sourceMappingURL=DropIcon.js.map