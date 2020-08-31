define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RemoveFilterIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 128h1792v1792H128V128zm1664 1664V256H256v1536h1536zM621 1517l-90-90 402-403-402-403 90-90 403 402 403-402 90 90-402 403 402 403-90 90-403-402-403 402z" })));
        },
        displayName: 'RemoveFilterIcon',
    });
    exports.default = RemoveFilterIcon;
});
//# sourceMappingURL=RemoveFilterIcon.js.map