define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FiveTileGridIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 256h2048v1408H0V256zm1024 128v512h384V384h-384zM896 1536V384H128v1152h768zm512 0v-512h-384v512h384zm512 0v-512h-384v512h384zm-384-640h384V384h-384v512z" })));
        },
        displayName: 'FiveTileGridIcon',
    });
    exports.default = FiveTileGridIcon;
});
//# sourceMappingURL=FiveTileGridIcon.js.map