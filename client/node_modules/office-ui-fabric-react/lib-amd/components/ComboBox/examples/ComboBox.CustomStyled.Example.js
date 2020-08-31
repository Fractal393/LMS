define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/index"], function (require, exports, tslib_1, React, index_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var wrapperClassName = index_1.mergeStyles({
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
    var optionsForCustomRender = tslib_1.__spreadArrays([
        { key: 'header1', text: 'Theme Fonts', itemType: index_1.SelectableOptionMenuItemType.Header }
    ], fonts.map(function (fontName) { return ({ key: fontName, text: fontName }); }), [
        { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
        { key: 'header2', text: 'Other Options', itemType: index_1.SelectableOptionMenuItemType.Header },
    ]);
    var onRenderOption = function (item) {
        switch (item.itemType) {
            case index_1.SelectableOptionMenuItemType.Header:
            case index_1.SelectableOptionMenuItemType.Divider:
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
    exports.ComboBoxCustomStyledExample = function () { return (React.createElement(index_1.Fabric, { className: wrapperClassName },
        React.createElement(index_1.ComboBox, { defaultSelectedKey: "Calibri", label: "Custom styled ComboBox", options: optionsWithCustomStyling, styles: ComboBoxCustomStyledExampleStyles }),
        React.createElement(index_1.ComboBox, { defaultSelectedKey: "Calibri", label: 'ComboBox with custom option rendering (type the name of a font and the option will render in that font)', allowFreeform: true, autoComplete: "on", options: optionsForCustomRender, onRenderOption: onRenderOption }))); };
});
//# sourceMappingURL=ComboBox.CustomStyled.Example.js.map