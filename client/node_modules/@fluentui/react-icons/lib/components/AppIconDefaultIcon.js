import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var AppIconDefaultIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M0 0h1920v1024h-896v896H0V0zm896 1792v-768H128v768h768zm0-896V128H128v768h768zm896 0V128h-768v768h768z" })));
    },
    displayName: 'AppIconDefaultIcon',
});
export default AppIconDefaultIcon;
//# sourceMappingURL=AppIconDefaultIcon.js.map