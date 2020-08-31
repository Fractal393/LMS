define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TableBrandedColumnIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 128h2048v1664H0V128zm768 640v384h512V768H768zm512-128V256H768v384h512zm-512 640v384h512v-384H768z" })));
        },
        displayName: 'TableBrandedColumnIcon',
    });
    exports.default = TableBrandedColumnIcon;
});
//# sourceMappingURL=TableBrandedColumnIcon.js.map