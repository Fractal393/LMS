define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VSTSLogoIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 373v1254l-518 421-799-293v293l-438-585 1316 101V439l439-66zM293 711v752L0 1338V749l200-261 678-195V0l731 439L293 711z" })));
        },
        displayName: 'VSTSLogoIcon',
    });
    exports.default = VSTSLogoIcon;
});
//# sourceMappingURL=VSTSLogoIcon.js.map