define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PaddingBottomIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 128h1920V0H0v128zm128 1792H0v128h128v-128zm1792 128v-128h-128v128h128zM512 1920H256v128h256v-128zm384 0H640v128h256v-128zm384 0h-256v128h256v-128zm384 0h-256v128h256v-128zm-979-685l-90 90 365 365 365-365-90-90-211 210V384H896v1061l-211-210z" })));
        },
        displayName: 'PaddingBottomIcon',
    });
    exports.default = PaddingBottomIcon;
});
//# sourceMappingURL=PaddingBottomIcon.js.map