define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1755 512h-475V37l475 475zm37 128v1408H128V0h1024v640h640z" })));
        },
        displayName: 'PageSolidIcon',
    });
    exports.default = PageSolidIcon;
});
//# sourceMappingURL=PageSolidIcon.js.map