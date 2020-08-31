define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlignCenterIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 128h2048v128H0V128zm256 384h1536v128H256V512zm0 768h1536v128H256v-128zM0 1792v-128h2048v128H0zm0-768V896h2048v128H0z" })));
        },
        displayName: 'AlignCenterIcon',
    });
    exports.default = AlignCenterIcon;
});
//# sourceMappingURL=AlignCenterIcon.js.map