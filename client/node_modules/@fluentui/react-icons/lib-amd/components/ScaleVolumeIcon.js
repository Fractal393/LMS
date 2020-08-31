define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScaleVolumeIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M512 128H219l338 339-90 90-339-338v293H0V0h512v128zM1536 0h512v512h-128V219l-339 338-90-90 338-339h-293V0zM467 1491l90 90-338 339h293v128H0v-512h128v293l339-338zm1453 338v-293h128v512h-512v-128h293l-338-339 90-90 339 338zM640 1408V640h768v768H640zm128-640v512h512V768H768z" })));
        },
        displayName: 'ScaleVolumeIcon',
    });
    exports.default = ScaleVolumeIcon;
});
//# sourceMappingURL=ScaleVolumeIcon.js.map