import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var SeparatorIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1024 128v1792H896V128h128z" })));
    },
    displayName: 'SeparatorIcon',
});
export default SeparatorIcon;
//# sourceMappingURL=SeparatorIcon.js.map