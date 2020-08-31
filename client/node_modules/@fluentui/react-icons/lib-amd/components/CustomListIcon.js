define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 0h1536v2048H256V0zm1408 1920V128H384v1792h1280zM1536 384v128H768V384h768zm-128 384v128H768V768h640zm-256 384v128H768v-128h384zm384 384v128H768v-128h768zM640 384v128H512V384h128zm0 384v128H512V768h128zm0 384v128H512v-128h128zm0 384v128H512v-128h128z" })));
        },
        displayName: 'CustomListIcon',
    });
    exports.default = CustomListIcon;
});
//# sourceMappingURL=CustomListIcon.js.map