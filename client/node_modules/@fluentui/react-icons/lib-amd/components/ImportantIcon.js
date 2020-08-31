define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImportantIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1152 1408H896V128h256v1280zm0 512H896v-256h256v256z" })));
        },
        displayName: 'ImportantIcon',
    });
    exports.default = ImportantIcon;
});
//# sourceMappingURL=ImportantIcon.js.map