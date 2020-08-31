define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AscendingIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1216 1024h512l-320 640h320v128h-512l320-640h-320v-128zm-704 614l163-163 90 90-317 318-317-318 90-90 163 163V128h128v1510zm811-870l-43 128h-128l256-768h128l256 768h-128l-43-128h-298zm149-448l-107 320h214l-107-320z" })));
        },
        displayName: 'AscendingIcon',
    });
    exports.default = AscendingIcon;
});
//# sourceMappingURL=AscendingIcon.js.map