define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenPaneIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 384h2048v1152H0V384zm128 128v896h1280V512H128zm1792 896V512h-384v896h384zm-640-512v128H859l162 163-90 90-317-317 317-317 90 90-162 163h421z" })));
        },
        displayName: 'OpenPaneIcon',
    });
    exports.default = OpenPaneIcon;
});
//# sourceMappingURL=OpenPaneIcon.js.map