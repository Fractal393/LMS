define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PublishContentIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M896 347L493 749l-90-90 557-557 557 557-90 90-403-402v1317H896V347zm768 1317h128v384H128v-384h128v256h1408v-256z" })));
        },
        displayName: 'PublishContentIcon',
    });
    exports.default = PublishContentIcon;
});
//# sourceMappingURL=PublishContentIcon.js.map