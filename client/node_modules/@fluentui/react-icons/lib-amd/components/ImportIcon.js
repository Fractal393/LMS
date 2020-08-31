define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImportIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M557 589L249 898h1543v128H252l305 305-90 90L6 960l461-461 90 90zm1363-77h128v896h-128V512z" })));
        },
        displayName: 'ImportIcon',
    });
    exports.default = ImportIcon;
});
//# sourceMappingURL=ImportIcon.js.map