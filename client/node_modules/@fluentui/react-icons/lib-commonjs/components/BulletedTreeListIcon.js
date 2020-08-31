"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var BulletedTreeListIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M512 384h1536v128H512V384zm512 640V896h1024v128H1024zm0 512v-128h1024v128H1024zM0 640V256h384v384H0zm128-256v128h128V384H128zm384 768V768h384v384H512zm128-256v128h128V896H640zm-128 768v-384h384v384H512zm128-256v128h128v-128H640z" })));
    },
    displayName: 'BulletedTreeListIcon',
});
exports.default = BulletedTreeListIcon;
//# sourceMappingURL=BulletedTreeListIcon.js.map