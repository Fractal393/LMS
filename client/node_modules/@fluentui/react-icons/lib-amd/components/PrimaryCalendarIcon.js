define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PrimaryCalendarIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2031 1537l-266 197 102 313-267-193-266 194 101-314-266-197h335l97-310 95 310h335zm17-1409v1249h-128V640H128v1152h1116l4 3-41 125H0V128h384V0h128v128h1024V0h128v128h384zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256h1792z" })));
        },
        displayName: 'PrimaryCalendarIcon',
    });
    exports.default = PrimaryCalendarIcon;
});
//# sourceMappingURL=PrimaryCalendarIcon.js.map