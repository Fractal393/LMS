define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuickNoteIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 128v1792H640l-512-512V128h1792zM640 1739v-331H309l331 331zM1792 256H256v1024h512v512h1024V256z" })));
        },
        displayName: 'QuickNoteIcon',
    });
    exports.default = QuickNoteIcon;
});
//# sourceMappingURL=QuickNoteIcon.js.map