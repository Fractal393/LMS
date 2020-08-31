"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var FocusViewIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M640 640V256h128v512H256V640h384zm-384 768v-128h512v512H640v-384H256zm1024 384v-512h512v128h-384v384h-128zm128-1152h384v128h-512V256h128v384z" })));
    },
    displayName: 'FocusViewIcon',
});
exports.default = FocusViewIcon;
//# sourceMappingURL=FocusViewIcon.js.map