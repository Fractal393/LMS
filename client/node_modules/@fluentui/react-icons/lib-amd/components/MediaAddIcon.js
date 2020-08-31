define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MediaAddIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 384h128v128H256V384zm0 256h128v128H256V640zm896-256h128v128h-128V384zm731 896h-310l155-154 155 154zm-475-320q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45zm640-320v896h-128V768H640v549l320-319 448 447 128-128v182l-37 37h-182l-357-358-320 321v165h640v128H512v-640H0V0h1536v640h512zm-640 0V128h-128v128h-128V128H384v128H256V128H128v896h128V896h128v128h128V640h896zm384 1024h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256z" })));
        },
        displayName: 'MediaAddIcon',
    });
    exports.default = MediaAddIcon;
});
//# sourceMappingURL=MediaAddIcon.js.map