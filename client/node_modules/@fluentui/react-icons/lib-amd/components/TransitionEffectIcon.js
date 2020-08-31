define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransitionEffectIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 0v896H0V0h128v768h768V347L733 509l-90-90 317-317 317 317-90 90-163-162v421h768V0h128zM0 1024h1920v896h-128v-768h-768v421l163-162 90 90-317 317-317-317 90-90 163 162v-421H128v768H0v-896z" })));
        },
        displayName: 'TransitionEffectIcon',
    });
    exports.default = TransitionEffectIcon;
});
//# sourceMappingURL=TransitionEffectIcon.js.map