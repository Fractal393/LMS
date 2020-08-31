define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddNotesIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h2048v128H0V256zm0 640V768h2048v128H0zm0 512v-128h1280v128H0zm0 512v-128h1280v128H0zm1790-640v256h256v128h-256v256h-128v-256h-256v-128h256v-256h128z" })));
        },
        displayName: 'AddNotesIcon',
    });
    exports.default = AddNotesIcon;
});
//# sourceMappingURL=AddNotesIcon.js.map