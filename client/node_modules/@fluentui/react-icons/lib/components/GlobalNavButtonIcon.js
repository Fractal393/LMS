import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var GlobalNavButtonIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 640H0V512h2048v128zm0 1024H0v-128h2048v128zm0-513H0v-127h2048v127z" })));
    },
    displayName: 'GlobalNavButtonIcon',
});
export default GlobalNavButtonIcon;
//# sourceMappingURL=GlobalNavButtonIcon.js.map