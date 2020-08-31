define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThumbnailViewMirroredIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1152h-640v640h640v-640zm-128 512h-384v-384h384v384zm128-1408h-640v640h640V256zm-128 512h-384V384h384v384zM0 384v128h1152V384H0zm384 384h768V640H384v128zm768 512H0v128h1152v-128zm0 256H384v128h768v-128z" })));
        },
        displayName: 'ThumbnailViewMirroredIcon',
    });
    exports.default = ThumbnailViewMirroredIcon;
});
//# sourceMappingURL=ThumbnailViewMirroredIcon.js.map