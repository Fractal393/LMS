import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var WorkItemBarIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1280 128v1792H640V128h640zm-128 128H768v1536h384V256z" })));
    },
    displayName: 'WorkItemBarIcon',
});
export default WorkItemBarIcon;
//# sourceMappingURL=WorkItemBarIcon.js.map