define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenInNewWindowIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1536 256h384v384h-128V475l-456 456-91-91 456-456h-165V256zm0 768l128-128v768H0V512h1280l-128 128H128v896h1408v-512z" })));
        },
        displayName: 'OpenInNewWindowIcon',
    });
    exports.default = OpenInNewWindowIcon;
});
//# sourceMappingURL=OpenInNewWindowIcon.js.map