define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TollIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M768 1920h128v128H0V0h1024v384H768v920l1085-542 185 371-1270 635v152zm0-296l256-128v-176l-256 128v176zm384-192l256-128v-176l-256 128v176zm643-498l-259 130v176l330-165-71-141zM640 1280V640H384v640h256zM128 256h768V128H128v128zm512 1664v-512H256V512h384V384H128v1536h512z" })));
        },
        displayName: 'TollIcon',
    });
    exports.default = TollIcon;
});
//# sourceMappingURL=TollIcon.js.map