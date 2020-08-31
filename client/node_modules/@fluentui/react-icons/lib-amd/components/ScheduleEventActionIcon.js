define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScheduleEventActionIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 128h384v512H128v1152h896v128H0V128h384V0h128v128h1024V0h128v128zm256 384V256h-256v128h-128V256H512v128H384V256H128v256h1792zm97 256l-238 384h269l-672 896h-264l256-512h-256l387-768h518zm-225 512h-243l238-384h-209l-258 512h256l-241 482 457-610z" })));
        },
        displayName: 'ScheduleEventActionIcon',
    });
    exports.default = ScheduleEventActionIcon;
});
//# sourceMappingURL=ScheduleEventActionIcon.js.map