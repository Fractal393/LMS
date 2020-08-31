define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindDirectionIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 0l683 2048-683-683-683 683L1024 0z" })));
        },
        displayName: 'WindDirectionIcon',
    });
    exports.default = WindDirectionIcon;
});
//# sourceMappingURL=WindDirectionIcon.js.map