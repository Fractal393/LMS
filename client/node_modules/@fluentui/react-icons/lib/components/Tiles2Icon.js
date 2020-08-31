import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';
var Tiles2Icon = createSvgIcon({
    svg: function (_a) {
        var classes = _a.classes;
        return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
            React.createElement("path", { d: "M256 2048V768h640v1280H256zM384 896v1024h384V896H384zM256 640V0h640v640H256zm128-512v384h384V128H384zM1024 0h640v1280h-640V0zm512 1152V128h-384v1024h384zm-512 896v-640h640v640h-640zm128-512v384h384v-384h-384z" })));
    },
    displayName: 'Tiles2Icon',
});
export default Tiles2Icon;
//# sourceMappingURL=Tiles2Icon.js.map