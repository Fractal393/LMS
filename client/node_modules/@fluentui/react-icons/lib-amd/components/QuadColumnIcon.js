define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuadColumnIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h384v1536H0V256zm128 1408h128V384H128v1280zm896-1408h384v1536h-384V256zm128 1408h128V384h-128v1280zM512 256h384v1536H512V256zm128 1408h128V384H640v1280zM1920 256v1536h-384V256h384zm-128 128h-128v1280h128V384z" })));
        },
        displayName: 'QuadColumnIcon',
    });
    exports.default = QuadColumnIcon;
});
//# sourceMappingURL=QuadColumnIcon.js.map