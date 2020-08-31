define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VisualsFolderIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M168 1664h856v128H0V384q0-27 10-50t27-40 41-28 50-10h352q45 0 77 9t58 24 46 31 40 31 44 23 55 10h736q26 0 49 10t41 27 28 41 10 50v256h256q26 0 49 10t41 27 28 41 10 49q0 30-14 58l-99 199h-143l128-256H552l-384 768zm-40-207l309-618q17-33 47-52t68-19h984V512H800q-45 0-77-9t-58-24-46-31-40-31-44-23-55-10H128v1073zm1792-49h128v640h-128v-640zm-256-128h128v768h-128v-768zm-256 256h128v512h-128v-512zm-256 256h128v256h-128v-256z" })));
        },
        displayName: 'VisualsFolderIcon',
    });
    exports.default = VisualsFolderIcon;
});
//# sourceMappingURL=VisualsFolderIcon.js.map