define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiffSideBySideIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 384h896v1280H0V384zm768 1152V768H128v768h640zM128 512v128h640V512H128zm1920-128v1280h-896V384h896zm-128 896h-640v256h640v-256zm0-768h-640v512h640V512z" })));
        },
        displayName: 'DiffSideBySideIcon',
    });
    exports.default = DiffSideBySideIcon;
});
//# sourceMappingURL=DiffSideBySideIcon.js.map