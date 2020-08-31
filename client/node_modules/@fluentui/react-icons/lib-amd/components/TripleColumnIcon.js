define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TripleColumnIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 1792V256h512v1536H128zM256 384v1280h256V384H256zm512 1408V256h512v1536H768zM896 384v1280h256V384H896zm512-128h512v1536h-512V256zm384 1408V384h-256v1280h256z" })));
        },
        displayName: 'TripleColumnIcon',
    });
    exports.default = TripleColumnIcon;
});
//# sourceMappingURL=TripleColumnIcon.js.map