define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MobileSelectedIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1073 1664l-57 56 72 72H832v-128h241zm143 256l128 128H512q-27 0-50-10t-40-27-28-41-10-50V128q0-27 10-50t27-40 41-28 50-10h1024q27 0 50 10t40 27 28 41 10 50v1264l-128 128V128H512v1792h704zm813-482l-557 557-269-269 90-91 179 179 467-467 90 91z" })));
        },
        displayName: 'MobileSelectedIcon',
    });
    exports.default = MobileSelectedIcon;
});
//# sourceMappingURL=MobileSelectedIcon.js.map