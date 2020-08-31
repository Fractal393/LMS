define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TrimStartIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 128H896v1792h768v128H256V0h1408v128zM768 1920V128H384v1792h384z" })));
        },
        displayName: 'TrimStartIcon',
    });
    exports.default = TrimStartIcon;
});
//# sourceMappingURL=TrimStartIcon.js.map