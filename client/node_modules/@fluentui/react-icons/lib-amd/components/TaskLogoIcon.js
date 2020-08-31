define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TaskLogoIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1894 387q0 12-8 22L994 1557 372 886q-9-9-9-24 0-16 11-27l147-136q10-10 25-10t26 11l404 435 695-893q11-14 28-14 12 0 23 8l158 123q14 12 14 28zm-230 1405V974l128-164v1110H128V256h1329l-100 128H256v1408h1408z" })));
        },
        displayName: 'TaskLogoIcon',
    });
    exports.default = TaskLogoIcon;
});
//# sourceMappingURL=TaskLogoIcon.js.map