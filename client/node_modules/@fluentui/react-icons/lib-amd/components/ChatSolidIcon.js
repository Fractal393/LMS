define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChatSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 128v1408H704l-448 448v-448H0V128h2048z" })));
        },
        displayName: 'ChatSolidIcon',
    });
    exports.default = ChatSolidIcon;
});
//# sourceMappingURL=ChatSolidIcon.js.map