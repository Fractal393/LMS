define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItalicIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1568 256h-217L882 1664h366l-128 128H416l128-128h161l469-1408H864l128-128h704l-128 128z" })));
        },
        displayName: 'ItalicIcon',
    });
    exports.default = ItalicIcon;
});
//# sourceMappingURL=ItalicIcon.js.map