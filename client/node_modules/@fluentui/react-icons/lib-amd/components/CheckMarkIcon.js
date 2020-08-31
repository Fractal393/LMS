define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckMarkIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1837 557L768 1627l-557-558 90-90 467 466 979-978 90 90z" })));
        },
        displayName: 'CheckMarkIcon',
    });
    exports.default = CheckMarkIcon;
});
//# sourceMappingURL=CheckMarkIcon.js.map