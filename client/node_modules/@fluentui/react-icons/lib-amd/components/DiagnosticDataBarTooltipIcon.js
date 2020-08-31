define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiagnosticDataBarTooltipIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 0h1792v1792h-640l-256 256-256-256H128V0zm1664 1664V128H256v1536h564l204 204 204-204h564zM768 640v896H512V640h256zm384 384v512H896v-512h256zm384-640v1152h-256V384h256z" })));
        },
        displayName: 'DiagnosticDataBarTooltipIcon',
    });
    exports.default = DiagnosticDataBarTooltipIcon;
});
//# sourceMappingURL=DiagnosticDataBarTooltipIcon.js.map