define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OctagonIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 562v796l-562 562H562L0 1358V562L562 0h796l562 562zm-128 53l-487-487H615L128 615v690l487 487h690l487-487V615z" })));
        },
        displayName: 'OctagonIcon',
    });
    exports.default = OctagonIcon;
});
//# sourceMappingURL=OctagonIcon.js.map