define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PauseIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 256h128v1536H640V256zm768 0v1536h-128V256h128z" })));
        },
        displayName: 'PauseIcon',
    });
    exports.default = PauseIcon;
});
//# sourceMappingURL=PauseIcon.js.map