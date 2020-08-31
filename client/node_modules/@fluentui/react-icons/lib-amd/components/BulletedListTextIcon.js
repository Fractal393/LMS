define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BulletedListTextIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 1280v-128h1664v128H384zm0 384v-128h1664v128H384zm0-768V768h1664v128H384zm0-512h1664v128H384V384z" })));
        },
        displayName: 'BulletedListTextIcon',
    });
    exports.default = BulletedListTextIcon;
});
//# sourceMappingURL=BulletedListTextIcon.js.map