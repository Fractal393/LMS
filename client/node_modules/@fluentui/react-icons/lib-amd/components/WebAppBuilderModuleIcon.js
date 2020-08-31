define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebAppBuilderModuleIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 128l512 896-512 896H512L0 1024l512-896h1024zm-74 1664l439-768-439-768H586l-439 768 439 768h876z" })));
        },
        displayName: 'WebAppBuilderModuleIcon',
    });
    exports.default = WebAppBuilderModuleIcon;
});
//# sourceMappingURL=WebAppBuilderModuleIcon.js.map