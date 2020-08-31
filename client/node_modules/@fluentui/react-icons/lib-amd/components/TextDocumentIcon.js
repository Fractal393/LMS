define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextDocumentIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1243 0l549 549v1499H128V0h1115zm37 219v293h293l-293-293zM256 1920h1408V640h-512V128H256v1792zm256-896V896h896v128H512zm0 256v-128h896v128H512zm0 256v-128h896v128H512z" })));
        },
        displayName: 'TextDocumentIcon',
    });
    exports.default = TextDocumentIcon;
});
//# sourceMappingURL=TextDocumentIcon.js.map