define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpecialEventIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 128v1792H0V128h384V0h128v128h896V0h128v128h384zM128 256v256h1664V256h-256v128h-128V256H512v128H384V256H128zm1664 1536V640H128v1152h1664zm-440-768l-241 189 101 315-252-197-252 197 101-315-241-189h302l90-280 90 280h302z" })));
        },
        displayName: 'SpecialEventIcon',
    });
    exports.default = SpecialEventIcon;
});
//# sourceMappingURL=SpecialEventIcon.js.map