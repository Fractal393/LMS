import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var FaviconIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v1664H0V128h2048zM128 256v256h1792V256H128zm1792 1408V640H128v1024h1792z" })));
    },
    displayName: 'FaviconIcon',
});
export default FaviconIcon;
//# sourceMappingURL=FaviconIcon.js.map