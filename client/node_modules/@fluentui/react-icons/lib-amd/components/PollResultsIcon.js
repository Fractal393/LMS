define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PollResultsIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 640v640h-768v512H128v128H0V0h128v128h1408v512h512zM128 256v384h1280V256H128zm1024 1408v-384H128v384h1024zm768-512V768H128v384h1792z" })));
        },
        displayName: 'PollResultsIcon',
    });
    exports.default = PollResultsIcon;
});
//# sourceMappingURL=PollResultsIcon.js.map