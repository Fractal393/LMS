var _a;
import { __spreadArrays } from "tslib";
import * as React from 'react';
import { ComboBox, SelectableOptionMenuItemType, Fabric, mergeStyles, } from 'office-ui-fabric-react/lib/index';
var wrapperClassName = mergeStyles({
    selectors: {
        '& > *': { marginBottom: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' },
    },
});
var fontMapping = (_a = {},
    _a['Arial Black'] = '"Arial Black", "Arial Black_MSFontService", sans-serif',
    _a['Times New Roman'] = '"Times New Roman", "Times New Roman_MSFontService", serif',
    _a['Comic Sans MS'] = '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy',
    _a['Calibri'] = 'Calibri, Calibri_MSFontService, sans-serif',
    _a);
var fonts = Object.keys(fontMapping);
var ComboBoxCustomStyledExampleStyles = {
    container: {
        maxWidth: '300px',
    },
    root: {
        backgroundColor: '#b4a0ff',
    },
    input: {
        backgroundColor: '#b4a0ff',
    },
};
var optionsWithCustomStyling = fonts.map(function (fontName) { return ({
    key: fontName,
    text: fontName,
    styles: {
        optionText: {
            fontFamily: fontMapping[fontName],
        },
    },
}); });
var optionsForCustomRender = __spreadArrays([
    { key: 'header1', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header }
], fonts.map(function (fontName) { return ({ key: fontName, text: fontName }); }), [
    { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
    { key: 'header2', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
]);
var onRenderOption = function (item) {
    switch (item.itemType) {
        case SelectableOptionMenuItemType.Header:
        case SelectableOptionMenuItemType.Divider:
            return React.createElement("span", null, item.text);
        default:
            var fontFamily = fontMapping[item.text];
            if (!fontFamily) {
                var newFontName = item.text;
                fontFamily = fontMapping[newFontName] = "\"" + newFontName + "\",\"Segoe UI\",Tahoma,Sans-Serif";
            }
            return React.createElement("span", { style: { fontFamily: fontFamily } }, item.text);
    }
};
export var ComboBoxCustomStyledExample = function () { return (React.createElement(Fabric, { className: wrapperClassName },
    React.createElement(ComboBox, { defaultSelectedKey: "Calibri", label: "Custom styled ComboBox", options: optionsWithCustomStyling, styles: ComboBoxCustomStyledExampleStyles }),
    React.createElement(ComboBox, { defaultSelectedKey: "Calibri", label: 'ComboBox with custom option rendering (type the name of a font and the option will render in that font)', allowFreeform: true, autoComplete: "on", options: optionsForCustomRender, onRenderOption: onRenderOption }))); };
//# sourceMappingURL=ComboBox.CustomStyled.Example.js.map