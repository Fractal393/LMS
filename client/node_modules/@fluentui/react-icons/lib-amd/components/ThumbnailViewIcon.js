define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThumbnailViewIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 1152h640v640H0v-640zm128 512h384v-384H128v384zM0 256h640v640H0V256zm128 512h384V384H128v384zm1920-384v128H896V384h1152zm-384 384H896V640h768v128zm-768 512h1152v128H896v-128zm0 256h768v128H896v-128z" })));
        },
        displayName: 'ThumbnailViewIcon',
    });
    exports.default = ThumbnailViewIcon;
});
//# sourceMappingURL=ThumbnailViewIcon.js.map