import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var FilterIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 128v219l-768 768v805H768v-805L0 347V128h2048zm-128 128H128v37l768 768v731h256v-731l768-768v-37z" })));
    },
    displayName: 'FilterIcon',
});
export default FilterIcon;
//# sourceMappingURL=FilterIcon.js.map