define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageAcountIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M0 0h2048v2048H0V0zm1920 1920V512H128v1408h1792zm0-1536V128H128v256h1792zm-128 256v512H256V640h1536zm-128 384V768H384v256h1280zm128 256v512H256v-512h1536zm-128 384v-256H384v256h1280z" })));
        },
        displayName: 'StorageAcountIcon',
    });
    exports.default = StorageAcountIcon;
});
//# sourceMappingURL=StorageAcountIcon.js.map