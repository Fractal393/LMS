define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberedListTextIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M512 1536v-128h1536v128H512zm0-1152h1536v128H512V384zm0 640V896h1536v128H512z" })));
        },
        displayName: 'NumberedListTextIcon',
    });
    exports.default = NumberedListTextIcon;
});
//# sourceMappingURL=NumberedListTextIcon.js.map