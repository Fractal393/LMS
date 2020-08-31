import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var ArchiveIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v640h-128v1152H128V768H0V128h2048zm-256 1664V768H256v1024h1536zm128-1152V256H128v384h1792zm-512 512H640v-128h768v128z" })));
    },
    displayName: 'ArchiveIcon',
});
export default ArchiveIcon;
//# sourceMappingURL=ArchiveIcon.js.map