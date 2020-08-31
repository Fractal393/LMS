import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var StepIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 256v1408H128v-640h512V640h512V256h768zm-128 128h-512v384H768v384H256v384h1536V384z" })));
    },
    displayName: 'StepIcon',
});
export default StepIcon;
//# sourceMappingURL=StepIcon.js.map