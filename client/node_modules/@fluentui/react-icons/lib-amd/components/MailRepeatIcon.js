define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MailRepeatIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1664q2 78-30 146t-86 119-124 83-144 35h-9l-2 1h-11q-109 0-204-43t-158-136v179h-128v-384h384v128h-152q19 29 46 52t58 41 66 26 69 9q56 0 105-14t87-44 65-71 38-99l1-2v-11l1-2v-13h128zm-128-512h128v384h-384v-128h152q-19-29-46-52t-58-41-66-26-69-9q-56 0-105 14t-87 44-65 71-38 99l-1 2v11l-1 2v13h-128q-2-78 29-146t86-119 124-83 145-35h9l2-1h11q109 0 204 43t158 136v-179zm128-768v640h-128V648l-896 447-896-447v888h896v128H0V384h2048zM1024 953l881-441H143l881 441z" })));
        },
        displayName: 'MailRepeatIcon',
    });
    exports.default = MailRepeatIcon;
});
//# sourceMappingURL=MailRepeatIcon.js.map