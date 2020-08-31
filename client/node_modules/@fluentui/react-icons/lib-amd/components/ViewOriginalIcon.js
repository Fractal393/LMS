define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewOriginalIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1280 896H256V256h1024v640zm-128-512H384v384h768V384zm896 256v1024H896v-128h1024V768h-384v384H768v256l-128-128v-128H0V0h1536v640h512zm-640-512H128v896h1280V128zM464 1414l315 314-319 318-74-74 179-180H384q-80 0-149-30t-122-82-83-122-30-150h128q0 53 20 99t55 82 81 55 100 20h181l-175-176 74-74z" })));
        },
        displayName: 'ViewOriginalIcon',
    });
    exports.default = ViewOriginalIcon;
});
//# sourceMappingURL=ViewOriginalIcon.js.map