import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var AddIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M2048 960v128h-960v960H960v-960H0V960h960V0h128v960h960z" })));
    },
    displayName: 'AddIcon',
});
export default AddIcon;
//# sourceMappingURL=AddIcon.js.map