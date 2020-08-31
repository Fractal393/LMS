import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
var intervalDelay = 100;
var intervalIncrement = 0.01;
export var ProgressIndicatorBasicExample = function () {
    var _a = React.useState(0), percentComplete = _a[0], setPercentComplete = _a[1];
    React.useEffect(function () {
        var id = setInterval(function () {
            setPercentComplete((intervalIncrement + percentComplete) % 1);
        }, intervalDelay);
        return function () {
            clearInterval(id);
        };
    });
    return (React.createElement(ProgressIndicator, { label: "Example title", description: "Example description", percentComplete: percentComplete }));
};
//# sourceMappingURL=ProgressIndicator.Basic.Example.js.map