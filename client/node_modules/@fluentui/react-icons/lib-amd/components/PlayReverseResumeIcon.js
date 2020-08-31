define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayReverseResumeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 256v1536h-128V256h128zM192 1024l1088-768v1536L192 1024zm960-521l-738 521 738 521V503z" })));
        },
        displayName: 'PlayReverseResumeIcon',
    });
    exports.default = PlayReverseResumeIcon;
});
//# sourceMappingURL=PlayReverseResumeIcon.js.map