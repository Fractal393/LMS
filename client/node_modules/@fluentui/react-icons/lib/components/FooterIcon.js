import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var FooterIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M128 0h1792v2048H128V0zm1664 1920V128H256v1792h1536zm-128-640v512H384v-512h1280zm-128 384v-256H512v256h1024z" })));
    },
    displayName: 'FooterIcon',
});
export default FooterIcon;
//# sourceMappingURL=FooterIcon.js.map