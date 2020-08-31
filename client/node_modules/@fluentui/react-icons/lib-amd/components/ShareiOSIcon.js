define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShareiOSIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 250L749 525l-90-90L1088 6l429 429-90 90-275-275v1158h-128V250zm256 390h512v1408H384V640h512v128H512v1152h1152V768h-384V640z" })));
        },
        displayName: 'ShareiOSIcon',
    });
    exports.default = ShareiOSIcon;
});
//# sourceMappingURL=ShareiOSIcon.js.map