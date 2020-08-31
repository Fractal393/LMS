define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FlagIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 256v1024h-896v-256H384v1024H256V0h896v256h768zm-896 640V128H384v768h640zm768-512h-640v768h640V384z" })));
        },
        displayName: 'FlagIcon',
    });
    exports.default = FlagIcon;
});
//# sourceMappingURL=FlagIcon.js.map