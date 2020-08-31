define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InkingToolIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 512h-120l-449 896h-72q-1 28-3 70t-8 93-15 105-23 108-33 101-44 84-57 57-72 22q-53 0-92-37t-67-95-46-131-29-144-15-133-6-100h-72L248 512H128V0h128v384h1536V0h128v512zm-896 1408q23-12 41-47t32-85 23-105 16-109 10-97 5-69H897q1 25 4 69t10 97 16 109 24 105 32 84 41 48zm632-1408H392l384 768h496l384-768z" })));
        },
        displayName: 'InkingToolIcon',
    });
    exports.default = InkingToolIcon;
});
//# sourceMappingURL=InkingToolIcon.js.map