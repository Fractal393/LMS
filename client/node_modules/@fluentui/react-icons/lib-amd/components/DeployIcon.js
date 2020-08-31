define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeployIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M960 870l301 301-90 90-147-146v677H896v-677l-147 146-90-90 301-301zM768 128h512v512H768V128zm128 384h256V256H896v256zM128 128h512v512H128V128zm1792 0v512h-512V128h512z" })));
        },
        displayName: 'DeployIcon',
    });
    exports.default = DeployIcon;
});
//# sourceMappingURL=DeployIcon.js.map