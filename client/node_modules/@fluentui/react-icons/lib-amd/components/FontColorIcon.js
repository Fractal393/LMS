define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FontColorIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1920h1408v128H256v-128zm387-640l-170 512H338L893 128h135l554 1664h-135l-171-512H643zm317-949l-274 821h548L960 331z" })));
        },
        displayName: 'FontColorIcon',
    });
    exports.default = FontColorIcon;
});
//# sourceMappingURL=FontColorIcon.js.map