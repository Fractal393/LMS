define(["require", "exports", "react", "office-ui-fabric-react/lib/index", "office-ui-fabric-react/lib/Styling", "@uifabric/react-hooks"], function (require, exports, React, index_1, Styling_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var white = index_1.getColorFromString('#ffffff');
    exports.ColorPickerBasicExample = function () {
        var _a = React.useState(white), color = _a[0], setColor = _a[1];
        var _b = React.useState(true), showPreview = _b[0], setShowPreview = _b[1];
        var _c = React.useState('alpha'), alphaType = _c[0], setAlphaType = _c[1];
        var updateColor = react_hooks_1.useConstCallback(function (ev, colorObj) { return setColor(colorObj); });
        var onShowPreviewClick = react_hooks_1.useConstCallback(function (ev, checked) { return setShowPreview(!!checked); });
        var onAlphaTypeChange = React.useCallback(function (ev, option) {
            if (option === void 0) { option = alphaOptions[0]; }
            if (option.key === 'none') {
                // If hiding the alpha slider, remove transparency from the color
                setColor(index_1.updateA(color, 100));
            }
            setAlphaType(option.key);
        }, [color]);
        return (React.createElement("div", { className: classNames.wrapper },
            React.createElement(index_1.ColorPicker, { color: color, onChange: updateColor, alphaType: alphaType, showPreview: showPreview, styles: colorPickerStyles, 
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
                React.createElement(index_1.Toggle, { label: "Show preview box", onChange: onShowPreviewClick, checked: showPreview }),
                React.createElement(index_1.ChoiceGroup, { label: "Alpha slider type", options: alphaOptions, defaultSelectedKey: alphaOptions[0].key, onChange: onAlphaTypeChange }))));
    };
    var alphaOptions = [
        { key: 'alpha', text: 'Alpha' },
        { key: 'transparency', text: 'Transparency' },
        { key: 'none', text: 'None' },
    ];
    var classNames = Styling_1.mergeStyleSets({
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
});
//# sourceMappingURL=ColorPicker.Basic.Example.js.map