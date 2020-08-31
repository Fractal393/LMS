define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SingleBookmarkIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 0v2048l-640-323-640 323V0h1280zm-128 128H512v1712q129-65 256-130t256-129q129 64 256 129t256 130V128z" })));
        },
        displayName: 'SingleBookmarkIcon',
    });
    exports.default = SingleBookmarkIcon;
});
//# sourceMappingURL=SingleBookmarkIcon.js.map