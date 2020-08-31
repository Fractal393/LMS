define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var F12DevToolsIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 256v1280h-86l-128-128h86V384H128v1024h512v128H0V256h2048zm-267 1280h-576q-218 219-437 437V523l1013 1013zm-309-128L896 832v832l256-256h320z" })));
        },
        displayName: 'F12DevToolsIcon',
    });
    exports.default = F12DevToolsIcon;
});
//# sourceMappingURL=F12DevToolsIcon.js.map