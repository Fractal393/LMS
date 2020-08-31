import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var NPMLogoIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 0v2048H0V0h2048zm-384 384H384v1280h640V640h384v1024h256V384z" })));
    },
    displayName: 'NPMLogoIcon',
});
export default NPMLogoIcon;
//# sourceMappingURL=NPMLogoIcon.js.map