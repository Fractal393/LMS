define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToDoLogoTopIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 640L853 1835l-400-400L1648 240l400 400z" })));
        },
        displayName: 'ToDoLogoTopIcon',
    });
    exports.default = ToDoLogoTopIcon;
});
//# sourceMappingURL=ToDoLogoTopIcon.js.map