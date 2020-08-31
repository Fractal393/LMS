define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MailIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 384v1280H0V384h2048zM143 512l881 441 881-441H143zm1777 1024V648l-896 447-896-447v888h1792z" })));
        },
        displayName: 'MailIcon',
    });
    exports.default = MailIcon;
});
//# sourceMappingURL=MailIcon.js.map