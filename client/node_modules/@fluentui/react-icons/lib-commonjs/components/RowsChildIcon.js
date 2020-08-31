"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RowsChildIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 1024v640H768v-256H256V896H0V256h1280v640H384v384h384v-256h1280zM128 768h1024V384H128v384zm1792 384H896v384h1024v-384z" })));
    },
    displayName: 'RowsChildIcon',
});
exports.default = RowsChildIcon;
//# sourceMappingURL=RowsChildIcon.js.map