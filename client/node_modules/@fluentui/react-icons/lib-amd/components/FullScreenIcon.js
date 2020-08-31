define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FullScreenIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 128v640h-128V347L347 1792h421v128H128v-640h128v421L1701 256h-421V128h640z" })));
        },
        displayName: 'FullScreenIcon',
    });
    exports.default = FullScreenIcon;
});
//# sourceMappingURL=FullScreenIcon.js.map