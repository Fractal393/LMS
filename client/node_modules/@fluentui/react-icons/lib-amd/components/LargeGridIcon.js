define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LargeGridIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 128h1664v1664H128V128zm1536 128H256v640h1408V256zM256 1024v640h640v-640H256zm768 640h640v-640h-640v640z" })));
        },
        displayName: 'LargeGridIcon',
    });
    exports.default = LargeGridIcon;
});
//# sourceMappingURL=LargeGridIcon.js.map