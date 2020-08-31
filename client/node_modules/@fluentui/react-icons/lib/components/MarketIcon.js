import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var MarketIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 384v640h-128V603l-768 768-384-384-675 674-90-90 765-766 384 384 677-677h-421V384h640z" })));
    },
    displayName: 'MarketIcon',
});
export default MarketIcon;
//# sourceMappingURL=MarketIcon.js.map