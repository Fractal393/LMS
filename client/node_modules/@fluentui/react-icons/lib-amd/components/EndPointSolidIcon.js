define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EndPointSolidIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 2048V0h768v1024H384v1024H256zm896-1792h768v1024h-768V256z" })));
        },
        displayName: 'EndPointSolidIcon',
    });
    exports.default = EndPointSolidIcon;
});
//# sourceMappingURL=EndPointSolidIcon.js.map