"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var KeytipSetup_1 = require("office-ui-fabric-react/lib-commonjs/components/Keytip/examples/KeytipSetup");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var react_hooks_1 = require("@uifabric/react-hooks");
var stackTokens = { childrenGap: 20 };
var marginBottom = { root: { marginBottom: 28 } };
var splitButtonStyles = { splitButtonContainer: { height: 32 } };
var splitButtonProps = {
    items: [
        {
            key: 'splitButtonMenuButton1',
            text: 'Split Button Menu Item 1',
            keytipProps: KeytipSetup_1.keytipMap.SplitButtonMenuItem1,
        },
        {
            key: 'splitButtonMenuButton2',
            text: 'Split Button Menu Item 2',
            keytipProps: KeytipSetup_1.keytipMap.SplitButtonMenuItem2,
        },
    ],
};
var buttonProps = {
    items: [
        {
            key: 'buttonMenuItem1',
            text: 'Menu Item 1',
            keytipProps: KeytipSetup_1.keytipMap.ButtonMenuItem1,
        },
        {
            key: 'buttonMenuItem2',
            text: 'Menu Item 2',
            keytipProps: KeytipSetup_1.keytipMap.ButtonMenuItem2,
        },
    ],
};
var log = function (text) { return function () { return console.log(text); }; };
exports.KeytipsButtonExample = function () {
    var _a = react_hooks_1.useBoolean(false), btnDisabled = _a[0], toggleBtnDisabled = _a[1].toggle;
    return (React.createElement("div", null,
        React.createElement("p", null, "When multiple Keytips start with the same character, typing that character will filter the visible keytips."),
        React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens },
            React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.Button, text: "Button", onClick: log('Button') }),
            React.createElement(Button_1.CompoundButton, { styles: marginBottom, keytipProps: KeytipSetup_1.keytipMap.CompoundButton, text: "Compound Button", secondaryText: 'With a Keytip', onClick: log('Compound Button') }),
            React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.ButtonWithMenu, text: "Button with Menu", menuProps: buttonProps, onClick: log('Button with Menu') }),
            React.createElement(Button_1.DefaultButton, { styles: splitButtonStyles, keytipProps: KeytipSetup_1.keytipMap.SplitButton, text: "Split Button", split: true, onClick: log('Split Button'), menuProps: splitButtonProps }),
            React.createElement(Button_1.DefaultButton, { text: "I do not have a keytip" })),
        React.createElement("p", null, "The 'offset' prop can be used to position the keytip a set distance from the top-left corner of the element."),
        React.createElement(Button_1.DefaultButton, { styles: marginBottom, keytipProps: KeytipSetup_1.keytipMap.ButtonOffset, text: "Button keytip offset 10x10" }),
        React.createElement("p", null, "When a Keytip's corresponding component is disabled, the keytip still appears but cannot be triggered."),
        React.createElement(Toggle_1.Toggle, { onText: 'Enabled', offText: 'Disabled', defaultChecked: !btnDisabled, onChange: toggleBtnDisabled, onClick: log('Button') }),
        React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.DisabledButton, disabled: btnDisabled, text: (btnDisabled ? 'Disabled' : 'Enabled') + ' Button', onClick: log('Disabled Button') })));
};
//# sourceMappingURL=Keytips.Button.Example.js.map