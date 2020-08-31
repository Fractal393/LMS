define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlimmerIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1792 0h256v1280h-256V0zM0 2048v-256h1280v256H0zM486 666l180-180 896 896-180 180-896-896z" })));
        },
        displayName: 'GlimmerIcon',
    });
    exports.default = GlimmerIcon;
});
//# sourceMappingURL=GlimmerIcon.js.map