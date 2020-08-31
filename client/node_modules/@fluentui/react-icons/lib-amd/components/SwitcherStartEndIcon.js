define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SwitcherStartEndIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M211 467l365-365 365 365-90 90-211-210v1701H512V347L301 557l-90-90zm1536 1024l90 90-365 365-365-365 90-90 211 210V0h128v1701l211-210z" })));
        },
        displayName: 'SwitcherStartEndIcon',
    });
    exports.default = SwitcherStartEndIcon;
});
//# sourceMappingURL=SwitcherStartEndIcon.js.map