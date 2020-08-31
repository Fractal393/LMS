define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FiltersIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1600 0q40 0 75 15t61 41 41 61 15 75v64h-34q-17 0-33 2t-30 8-22 19-9 35v832q0 27-10 50t-27 40-41 28-50 10h-256v512q0 53-20 99t-55 82-81 55-100 20q-53 0-99-20t-82-55-55-81-20-100v-512H512q-27 0-50-10t-40-27-28-41-10-50V256q0-53 20-99t55-82 81-55T640 0h960zm-64 1152v-128H512v128h384v640q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50v-640h384zm0-832q0-55 29-102t80-71q-8-10-20-14t-25-5H640q-27 0-50 10t-40 27-28 41-10 50v640h1024V320z" })));
        },
        displayName: 'FiltersIcon',
    });
    exports.default = FiltersIcon;
});
//# sourceMappingURL=FiltersIcon.js.map