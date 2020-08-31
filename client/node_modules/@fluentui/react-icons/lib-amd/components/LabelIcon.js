define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LabelIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1720 128q41 0 77 16t63 43 43 63 16 78q0 37-10 65t-29 53-41 46-47 46v1254H256V256h1254q24-24 46-47t47-41 52-29 65-11zm0 128q-29 0-50 21l-948 948-34 135 135-34 948-948q21-21 21-50 0-30-21-51t-51-21zm-56 410l-775 776-377 94 94-377 776-775H384v1280h1280V666z" })));
        },
        displayName: 'LabelIcon',
    });
    exports.default = LabelIcon;
});
//# sourceMappingURL=LabelIcon.js.map