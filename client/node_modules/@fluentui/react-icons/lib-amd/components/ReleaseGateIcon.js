define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReleaseGateIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M749 403l557 557-557 557-90-90 402-403H0V896h1061L659 493l90-90zM1152 0h512v1920h-512v-128h384V128h-384V0z" })));
        },
        displayName: 'ReleaseGateIcon',
    });
    exports.default = ReleaseGateIcon;
});
//# sourceMappingURL=ReleaseGateIcon.js.map