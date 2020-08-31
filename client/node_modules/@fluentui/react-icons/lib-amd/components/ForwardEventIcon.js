define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ForwardEventIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 128h384v1297l-128-128V640H128v1152h1291l128 128H0V128h384V0h128v128h1024V0h128v128zM128 512h1792V256h-256v128h-128V256H512v128H384V256H128v256zm1507 861l90-90 317 317-317 317-90-90 163-163h-518v-128h518l-163-163z" })));
        },
        displayName: 'ForwardEventIcon',
    });
    exports.default = ForwardEventIcon;
});
//# sourceMappingURL=ForwardEventIcon.js.map