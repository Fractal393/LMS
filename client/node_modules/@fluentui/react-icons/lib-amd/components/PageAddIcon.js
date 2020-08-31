define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageAddIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1664 1664h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256zM384 128v1536h768v128H256V0h859l549 549v731h-128V640h-512V128H384zm768 91v293h293l-293-293z" })));
        },
        displayName: 'PageAddIcon',
    });
    exports.default = PageAddIcon;
});
//# sourceMappingURL=PageAddIcon.js.map