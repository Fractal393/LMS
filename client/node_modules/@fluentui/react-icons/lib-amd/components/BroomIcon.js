define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BroomIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1984 0q26 0 45 19t19 45q0 26-19 45l-730 730q54 69 81 150t28 168q0 103-39 197t-112 168l-68 68-227 454L4 1086l454-227 68-68q73-73 167-112t198-39q87 0 168 27t150 82l730-730q19-19 45-19zm-915 1543L505 979l-285 142 707 707 142-285zm83-98q61-60 94-130t34-158q0-81-30-151t-84-124-123-83-152-31q-87 0-157 33t-131 95l549 549z" })));
        },
        displayName: 'BroomIcon',
    });
    exports.default = BroomIcon;
});
//# sourceMappingURL=BroomIcon.js.map