define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalDistributeCenterIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 512v128h-512v256H512V640H0V512h512V256h1024v256h512zm-640-128H640v384h768V384zm384 1024h256v128h-256v256H256v-256H0v-128h256v-256h1536v256zm-128-128H384v384h1280v-384z" })));
        },
        displayName: 'VerticalDistributeCenterIcon',
    });
    exports.default = VerticalDistributeCenterIcon;
});
//# sourceMappingURL=VerticalDistributeCenterIcon.js.map