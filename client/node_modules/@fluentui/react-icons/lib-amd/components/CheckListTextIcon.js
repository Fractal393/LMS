define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckListTextIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 1664v-128h1408v128H640zm0-384v-128h1408v128H640zm0-896h1408v128H640V384zm0 512V768h1408v128H640z" })));
        },
        displayName: 'CheckListTextIcon',
    });
    exports.default = CheckListTextIcon;
});
//# sourceMappingURL=CheckListTextIcon.js.map