import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var TaskboardIcon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M1920 128v1792H0V128h1920zm-128 128h-768v1024h768V256zm-1664 0v384h768V256H128zm0 1536h768V768H128v1024zm1664 0v-384h-768v384h768z" })));
    },
    displayName: 'TaskboardIcon',
});
export default TaskboardIcon;
//# sourceMappingURL=TaskboardIcon.js.map