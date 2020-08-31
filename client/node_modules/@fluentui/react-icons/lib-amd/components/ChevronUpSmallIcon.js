define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChevronUpSmallIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 441l1017 1017-242 241-775-775-775 775L7 1458 1024 441z" })));
        },
        displayName: 'ChevronUpSmallIcon',
    });
    exports.default = ChevronUpSmallIcon;
});
//# sourceMappingURL=ChevronUpSmallIcon.js.map