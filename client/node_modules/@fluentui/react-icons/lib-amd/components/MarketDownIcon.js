define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarketDownIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 1024h128v640h-640v-128h421l-677-677-384 384L3 477l90-90 675 674 384-384 768 768v-421z" })));
        },
        displayName: 'MarketDownIcon',
    });
    exports.default = MarketDownIcon;
});
//# sourceMappingURL=MarketDownIcon.js.map