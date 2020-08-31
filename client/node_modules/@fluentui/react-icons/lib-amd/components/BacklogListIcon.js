define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BacklogListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 128h1792v512H128V128zm1664 384V256H256v256h1536zM512 1280V768h1408v512H512zm128-384v256h1152V896H640zM128 1920v-512h1792v512H128zm128-384v256h1536v-256H256z" })));
        },
        displayName: 'BacklogListIcon',
    });
    exports.default = BacklogListIcon;
});
//# sourceMappingURL=BacklogListIcon.js.map