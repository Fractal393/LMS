"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Layer_1 = require("office-ui-fabric-react/lib-commonjs/Layer");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var react_hooks_1 = require("@uifabric/react-hooks");
exports.LayerBasicExample = function () {
    var _a = react_hooks_1.useBoolean(false), showLayer = _a[0], toggleShowLayer = _a[1].toggle;
    var content = React.createElement("div", { className: contentClass }, "Hello world");
    return (React.createElement("div", null,
        React.createElement(Toggle_1.Toggle, { label: "Wrap the content box below in a Layer", inlineLabel: true, checked: showLayer, onChange: toggleShowLayer }),
        showLayer ? React.createElement(Layer_1.Layer, null, content) : content));
};
var theme = Styling_1.getTheme();
var contentClass = Styling_1.mergeStyles([
    {
        backgroundColor: theme.palette.themePrimary,
        color: theme.palette.white,
        lineHeight: '50px',
        padding: '0 20px',
    },
    Styling_1.AnimationClassNames.scaleUpIn100,
]);
//# sourceMappingURL=Layer.Basic.Example.js.map