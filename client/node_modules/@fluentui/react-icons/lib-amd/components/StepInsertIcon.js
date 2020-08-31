define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StepInsertIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M1920 256v1408H128v-640h512V640h512V256h768zm-128 128h-512v384H768v384H256v384h1536V384zm-1274 0H0V256h518L355 93l90-90 317 317-317 317-90-90 163-163z" })));
        },
        displayName: 'StepInsertIcon',
    });
    exports.default = StepInsertIcon;
});
//# sourceMappingURL=StepInsertIcon.js.map