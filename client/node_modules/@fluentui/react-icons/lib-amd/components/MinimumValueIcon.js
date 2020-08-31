define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MinimumValueIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1024 512h128v896h-128V512zm-256 0h128v896H768V512zm1152 512h-421l162 163-90 90-317-317 317-317 90 90-162 163h421v128zM349 643l317 317-317 317-90-90 162-163H0V896h421L259 733l90-90z" })));
        },
        displayName: 'MinimumValueIcon',
    });
    exports.default = MinimumValueIcon;
});
//# sourceMappingURL=MinimumValueIcon.js.map