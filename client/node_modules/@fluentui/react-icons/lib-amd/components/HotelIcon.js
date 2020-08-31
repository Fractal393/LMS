define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HotelIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 1152v768h-128v-128H128v128H0v-768h128v113l256-512V128h128v128h1024V128h128v384q27 0 50 10t40 27 28 41 10 50v256q0 39-21 70l149 299v-113h128zm-896-512v256h512V640h-512zM512 384v384h512V640q0-27 10-50t27-40 41-28 50-10h384V384H512zm-248 896h1520l-128-256h-504q-27 0-50-10t-40-27-28-41-10-50H455l-191 384zm1656 384v-256H128v256h1792z" })));
        },
        displayName: 'HotelIcon',
    });
    exports.default = HotelIcon;
});
//# sourceMappingURL=HotelIcon.js.map