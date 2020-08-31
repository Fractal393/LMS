define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogRemoveIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M256 1792h1092l-128 128H128v-384H0v-128h128V640H0V512h128V0h1792v1220l-128 128V128H256v384h128v128H256v768h128v128H256v256zm768-1152v896H640V640h384zM896 768H768v640h128V768zm512 510V512h-128v894l-95 95 34 35h-67V384h384v835l-35-34-93 93zm411 450l226 227-90 90-227-226-227 227-90-91 227-227-227-227 90-90 227 227 227-227 90 91-226 226z" })));
        },
        displayName: 'LogRemoveIcon',
    });
    exports.default = LogRemoveIcon;
});
//# sourceMappingURL=LogRemoveIcon.js.map