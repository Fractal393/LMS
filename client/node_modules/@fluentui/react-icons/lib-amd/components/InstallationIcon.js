define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InstallationIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 1664h128v384H128v-384h128v256h1408v-256zm-147-531l-557 557-557-557 90-90 403 402V128h128v1317l403-402 90 90z" })));
        },
        displayName: 'InstallationIcon',
    });
    exports.default = InstallationIcon;
});
//# sourceMappingURL=InstallationIcon.js.map