define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FullViewIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 1664v-384h128v512h-512v-128h384zM1280 256h512v512h-128V384h-384V256zM256 768V256h512v128H384v384H256zm128 512v384h384v128H256v-512h128z" })));
        },
        displayName: 'FullViewIcon',
    });
    exports.default = FullViewIcon;
});
//# sourceMappingURL=FullViewIcon.js.map