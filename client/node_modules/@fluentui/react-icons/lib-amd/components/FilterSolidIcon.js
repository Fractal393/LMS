define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v219l-768 768v805H768v-805L0 347V128h2048z" })));
        },
        displayName: 'FilterSolidIcon',
    });
    exports.default = FilterSolidIcon;
});
//# sourceMappingURL=FilterSolidIcon.js.map