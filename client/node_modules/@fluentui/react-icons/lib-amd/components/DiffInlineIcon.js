define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiffInlineIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 0v2048H256V0h1536zM384 128v384h1280V128H384zm1280 1408H384v384h1280v-384zm0-256V640H384v640h1280z" })));
        },
        displayName: 'DiffInlineIcon',
    });
    exports.default = DiffInlineIcon;
});
//# sourceMappingURL=DiffInlineIcon.js.map