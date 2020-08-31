define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddSpaceBeforeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 1792v-128h1792v128H128zm0-640h1792v128H128v-128zm1149-451l-317 317-317-317 90-90 163 163V128h128v646l163-163 90 90z" })));
        },
        displayName: 'AddSpaceBeforeIcon',
    });
    exports.default = AddSpaceBeforeIcon;
});
//# sourceMappingURL=AddSpaceBeforeIcon.js.map