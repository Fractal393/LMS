define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 640h256v1152H512v-256H256v-256H0V128h1536v256h256v256zM128 256v896h1280V256H128zm256 1024v128h1280V512h-128v768H384zm1536 384V768h-128v768H640v128h1280z" })));
        },
        displayName: 'StackIcon',
    });
    exports.default = StackIcon;
});
//# sourceMappingURL=StackIcon.js.map