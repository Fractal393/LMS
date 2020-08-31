define(["require", "exports", "react", "../utils/createSvgIcon"], function (require, exports, React, createSvgIcon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenPaneMirroredIcon = createSvgIcon_1.default({
        svg: function (_a) {
            var classes = _a.classes;
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", className: classes.svg },
                React.createElement("path", { d: "M2048 384H0v1152h2048V384zm-128 128v896H640V512h1280zM128 1408V512h384v896H128zm640-512v128h421l-162 163 90 90 317-317-317-317-90 90 162 163H768z" })));
        },
        displayName: 'OpenPaneMirroredIcon',
    });
    exports.default = OpenPaneMirroredIcon;
});
//# sourceMappingURL=OpenPaneMirroredIcon.js.map