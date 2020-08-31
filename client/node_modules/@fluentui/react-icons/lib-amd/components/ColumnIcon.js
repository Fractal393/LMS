define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColumnIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M512 0h1024v1920H512V0zm896 1792V384H640v1408h768zm0-1536V128H640v128h768z" })));
        },
        displayName: 'ColumnIcon',
    });
    exports.default = ColumnIcon;
});
//# sourceMappingURL=ColumnIcon.js.map