define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigateExternalInlineIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 1408h128v640H256V640h640v128H384v1152h1152v-512zm128-768v640h-128V859l-595 594-90-90 594-595h-421V640h640z" })));
        },
        displayName: 'NavigateExternalInlineIcon',
    });
    exports.default = NavigateExternalInlineIcon;
});
//# sourceMappingURL=NavigateExternalInlineIcon.js.map