define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SectionIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1620 576q23 0 46 8t44 23 37 34 24 42l277 789H0l278-789q8-22 23-41t36-34 43-23 48-9h1192zM428 704q-3 0-7 2t-10 6-8 6-5 7l-217 619h1686l-217-619q-1-3-4-6t-9-7-9-5-8-3H428z" })));
        },
        displayName: 'SectionIcon',
    });
    exports.default = SectionIcon;
});
//# sourceMappingURL=SectionIcon.js.map