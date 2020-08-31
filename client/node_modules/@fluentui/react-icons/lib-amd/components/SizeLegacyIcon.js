define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SizeLegacyIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 1152h128v768H0V128h1792v512h128v512zM128 1792h512V640h1024V256H128v1536zm640 0h512v-640h512V768H768v1024zm1152 0v-512h-512v512h512z" })));
        },
        displayName: 'SizeLegacyIcon',
    });
    exports.default = SizeLegacyIcon;
});
//# sourceMappingURL=SizeLegacyIcon.js.map