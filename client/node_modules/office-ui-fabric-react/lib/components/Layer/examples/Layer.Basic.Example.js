import * as React from 'react';
import { AnimationClassNames, mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { Layer } from 'office-ui-fabric-react/lib/Layer';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useBoolean } from '@uifabric/react-hooks';
export var LayerBasicExample = function () {
    var _a = useBoolean(false), showLayer = _a[0], toggleShowLayer = _a[1].toggle;
    var content = React.createElement("div", { className: contentClass }, "Hello world");
    return (React.createElement("div", null,
        React.createElement(Toggle, { label: "Wrap the content box below in a Layer", inlineLabel: true, checked: showLayer, onChange: toggleShowLayer }),
        showLayer ? React.createElement(Layer, null, content) : content));
};
var theme = getTheme();
var contentClass = mergeStyles([
    {
        backgroundColor: theme.palette.themePrimary,
        color: theme.palette.white,
        lineHeight: '50px',
        padding: '0 20px',
    },
    AnimationClassNames.scaleUpIn100,
]);
//# sourceMappingURL=Layer.Basic.Example.js.map