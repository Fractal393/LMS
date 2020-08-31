define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GenerateIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2011 1728l-318 317-90-90 163-163h-614v-128h614l-163-163 90-90 318 317zm-669 192l128 128H128V0h1115l549 549v734l-128-128V640h-512V128H256v1792h1086zm-62-1408h293l-293-293v293z" })));
        },
        displayName: 'GenerateIcon',
    });
    exports.default = GenerateIcon;
});
//# sourceMappingURL=GenerateIcon.js.map