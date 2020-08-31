define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenWithIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2045 1219l-317-317-317 317 90 90 162-163v583h129v-583l163 163 90-90zm-253-834H639V256h1153v129zm-256 1280H639v-129h897v129zM384 512H0V128h384v384zM128 384h128V256H128v128zm256 768H0V768h384v384zm-256-128h128V896H128v128zm256 768H0v-384h384v384zm-256-128h128v-128H128v128zm1280-640H640V896h896l-128 128z" })));
        },
        displayName: 'OpenWithIcon',
    });
    exports.default = OpenWithIcon;
});
//# sourceMappingURL=OpenWithIcon.js.map