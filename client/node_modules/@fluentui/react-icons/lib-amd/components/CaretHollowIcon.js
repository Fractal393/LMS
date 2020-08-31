define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CaretHollowIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 293l731 731-731 731V293zm128 310v842l421-421-421-421z" })));
        },
        displayName: 'CaretHollowIcon',
    });
    exports.default = CaretHollowIcon;
});
//# sourceMappingURL=CaretHollowIcon.js.map