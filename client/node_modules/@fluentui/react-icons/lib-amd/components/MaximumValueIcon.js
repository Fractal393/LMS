define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaximumValueIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 512h128v896H0V512zm2048 0v896h-128V512h128zm-531 131l318 317-318 317-90-90 162-163H475l162 163-90 90-317-317 317-317 90 90-162 163h1114l-162-163 90-90z" })));
        },
        displayName: 'MaximumValueIcon',
    });
    exports.default = MaximumValueIcon;
});
//# sourceMappingURL=MaximumValueIcon.js.map