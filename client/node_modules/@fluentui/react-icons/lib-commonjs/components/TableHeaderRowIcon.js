"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var TableHeaderRowIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 128h2048v1664H0V128zm768 1024h512V768H768v384zm512 128H768v384h512v-384zM640 768H128v384h512V768zm768 0v384h512V768h-512zM128 1280v384h512v-384H128zm1280 384h512v-384h-512v384z" })));
    },
    displayName: 'TableHeaderRowIcon',
});
exports.default = TableHeaderRowIcon;
//# sourceMappingURL=TableHeaderRowIcon.js.map