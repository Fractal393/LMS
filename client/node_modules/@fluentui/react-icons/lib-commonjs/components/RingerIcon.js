"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createSvgIcon_1 = require("../utils/createSvgIcon");
var RingerIcon = createSvgIcon_1.default({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1792 1536v128h-512q0 53-20 99t-55 82-81 55-100 20q-53 0-99-20t-82-55-55-81-20-100H256v-128h128V768q0-88 23-170t64-153 100-129 130-100 153-65 170-23q88 0 170 23t153 64 129 100 100 130 65 153 23 170v768h128zm-256 0V768q0-106-40-199t-110-162-163-110-199-41q-106 0-199 40T663 406 553 569t-41 199v768h1024zm-512 256q27 0 50-10t40-27 28-41 10-50H896q0 27 10 50t27 40 41 28 50 10z" })));
    },
    displayName: 'RingerIcon',
});
exports.default = RingerIcon;
//# sourceMappingURL=RingerIcon.js.map