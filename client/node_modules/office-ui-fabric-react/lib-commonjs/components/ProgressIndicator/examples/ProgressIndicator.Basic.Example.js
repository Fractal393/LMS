"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ProgressIndicator_1 = require("office-ui-fabric-react/lib-commonjs/ProgressIndicator");
var intervalDelay = 100;
var intervalIncrement = 0.01;
exports.ProgressIndicatorBasicExample = function () {
    var _a = React.useState(0), percentComplete = _a[0], setPercentComplete = _a[1];
    React.useEffect(function () {
        var id = setInterval(function () {
            setPercentComplete((intervalIncrement + percentComplete) % 1);
        }, intervalDelay);
        return function () {
            clearInterval(id);
        };
    });
    return (React.createElement(ProgressIndicator_1.ProgressIndicator, { label: "Example title", description: "Example description", percentComplete: percentComplete }));
};
//# sourceMappingURL=ProgressIndicator.Basic.Example.js.map