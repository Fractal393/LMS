define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayResumeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M384 256h128v1536H384V256zm1472 768L768 1792V256l1088 768zm-960 521l738-521-738-521v1042z" })));
        },
        displayName: 'PlayResumeIcon',
    });
    exports.default = PlayResumeIcon;
});
//# sourceMappingURL=PlayResumeIcon.js.map