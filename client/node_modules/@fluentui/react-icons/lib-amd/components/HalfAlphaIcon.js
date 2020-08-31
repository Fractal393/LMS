define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HalfAlphaIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1105 128l640 1920h-135l-171-512H615l-170 512H310L950 128h155zM658 1408h739L1027 300 658 1408z" })));
        },
        displayName: 'HalfAlphaIcon',
    });
    exports.default = HalfAlphaIcon;
});
//# sourceMappingURL=HalfAlphaIcon.js.map