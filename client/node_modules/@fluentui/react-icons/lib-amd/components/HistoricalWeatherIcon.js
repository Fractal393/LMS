define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HistoricalWeatherIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M128 1664h1920v128H0V256h128v441l525-263 340 340 459 115 487-486 90 90-537 538-565-141-300-300-499 249v297l520-115 519 259h354l434-217 58 114-462 231h-414l-505-253-504 112v397z" })));
        },
        displayName: 'HistoricalWeatherIcon',
    });
    exports.default = HistoricalWeatherIcon;
});
//# sourceMappingURL=HistoricalWeatherIcon.js.map