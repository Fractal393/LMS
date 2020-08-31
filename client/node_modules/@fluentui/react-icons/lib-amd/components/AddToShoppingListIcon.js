define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddToShoppingListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M640 896H512V768h128v128zm896 0H768V768h768v128zM512 1152h128v128H512v-128zm256 0h768v128H768v-128zM640 512H512V384h128v128zm896 0H768V384h768v128zm512 1152v128h-256v256h-128v-256h-256v-128h256v-256h128v256h256zm-1664 0h896v128H256V0h1536v1280h-128V128H384v1536z" })));
        },
        displayName: 'AddToShoppingListIcon',
    });
    exports.default = AddToShoppingListIcon;
});
//# sourceMappingURL=AddToShoppingListIcon.js.map