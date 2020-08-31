define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewListIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 0v2048H0V0h2048zM128 640h512V128H128v512zm0 640h512V768H128v512zm512 128H128v512h512v-512zm1280 0H768v512h1152v-512zm0-640H768v512h1152V768zm0-128V128H768v512h1152z" })));
        },
        displayName: 'ViewListIcon',
    });
    exports.default = ViewListIcon;
});
//# sourceMappingURL=ViewListIcon.js.map