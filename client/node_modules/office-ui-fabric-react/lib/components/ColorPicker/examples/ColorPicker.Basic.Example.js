import * as React from 'react';
import { ColorPicker, ChoiceGroup, Toggle, getColorFromString, updateA, } from 'office-ui-fabric-react/lib/index';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { useConstCallback } from '@uifabric/react-hooks';
var white = getColorFromString('#ffffff');
export var ColorPickerBasicExample = function () {
    var _a = React.useState(white), color = _a[0], setColor = _a[1];
    var _b = React.useState(true), showPreview = _b[0], setShowPreview = _b[1];
    var _c = React.useState('alpha'), alphaType = _c[0], setAlphaType = _c[1];
    var updateColor = useConstCallback(function (ev, colorObj) { return setColor(colorObj); });
    var onShowPreviewClick = useConstCallback(function (ev, checked) { return setShowPreview(!!checked); });
    var onAlphaTypeChange = React.useCallback(function (ev, option) {
        if (option === void 0) { option = alphaOptions[0]; }
        if (option.key === 'none') {
            // If hiding the alpha slider, remove transparency from the color
            setColor(updateA(color, 100));
        }
        setAlphaType(option.key);
    }, [color]);
    return (React.createElement("div", { className: classNames.wrapper },
        React.createElement(ColorPicker, { color: color, onChange: updateColor, alphaType: alphaType, showPreview: showPreview, styles: colorPickerStyles, 
            // The ColorPicker provides default English strings for visible text.
            // If your app is localized, you MUST provide the `strings` prop with localized strings.
            strings: {
                // By default, the sliders will use the text field labels as their aria labels.
                // If you'd like to provide more detailed instructions, you can use these props.
                alphaAriaLabel: 'Alpha slider: Use left and right arrow keys to change value, hold shift for a larger jump',
                transparencyAriaLabel: 'Transparency slider: Use left and right arrow keys to change value, hold shift for a larger jump',
                hueAriaLabel: 'Hue slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            } }),
        React.createElement("div", { className: classNames.column2 },
            React.createElement(Toggle, { label: "Show preview box", onChange: onShowPreviewClick, checked: showPreview }),
            React.createElement(ChoiceGroup, { label: "Alpha slider type", options: alphaOptions, defaultSelectedKey: alphaOptions[0].key, onChange: onAlphaTypeChange }))));
};
var alphaOptions = [
    { key: 'alpha', text: 'Alpha' },
    { key: 'transparency', text: 'Transparency' },
    { key: 'none', text: 'None' },
];
var classNames = mergeStyleSets({
    wrapper: { display: 'flex' },
    column2: { marginLeft: 10 },
});
var colorPickerStyles = {
    panel: { padding: 12 },
    root: {
        maxWidth: 352,
        minWidth: 352,
    },
    colorRectangle: { height: 268 },
};
//# sourceMappingURL=ColorPicker.Basic.Example.js.map