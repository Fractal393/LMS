import * as React from 'react';
import { DefaultButton, CompoundButton } from 'office-ui-fabric-react/lib/Button';
import { keytipMap } from 'office-ui-fabric-react/lib/components/Keytip/examples/KeytipSetup';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useBoolean } from '@uifabric/react-hooks';
var stackTokens = { childrenGap: 20 };
var marginBottom = { root: { marginBottom: 28 } };
var splitButtonStyles = { splitButtonContainer: { height: 32 } };
var splitButtonProps = {
    items: [
        {
            key: 'splitButtonMenuButton1',
            text: 'Split Button Menu Item 1',
            keytipProps: keytipMap.SplitButtonMenuItem1,
        },
        {
            key: 'splitButtonMenuButton2',
            text: 'Split Button Menu Item 2',
            keytipProps: keytipMap.SplitButtonMenuItem2,
        },
    ],
};
var buttonProps = {
    items: [
        {
            key: 'buttonMenuItem1',
            text: 'Menu Item 1',
            keytipProps: keytipMap.ButtonMenuItem1,
        },
        {
            key: 'buttonMenuItem2',
            text: 'Menu Item 2',
            keytipProps: keytipMap.ButtonMenuItem2,
        },
    ],
};
var log = function (text) { return function () { return console.log(text); }; };
export var KeytipsButtonExample = function () {
    var _a = useBoolean(false), btnDisabled = _a[0], toggleBtnDisabled = _a[1].toggle;
    return (React.createElement("div", null,
        React.createElement("p", null, "When multiple Keytips start with the same character, typing that character will filter the visible keytips."),
        React.createElement(Stack, { horizontal: true, tokens: stackTokens },
            React.createElement(DefaultButton, { keytipProps: keytipMap.Button, text: "Button", onClick: log('Button') }),
            React.createElement(CompoundButton, { styles: marginBottom, keytipProps: keytipMap.CompoundButton, text: "Compound Button", secondaryText: 'With a Keytip', onClick: log('Compound Button') }),
            React.createElement(DefaultButton, { keytipProps: keytipMap.ButtonWithMenu, text: "Button with Menu", menuProps: buttonProps, onClick: log('Button with Menu') }),
            React.createElement(DefaultButton, { styles: splitButtonStyles, keytipProps: keytipMap.SplitButton, text: "Split Button", split: true, onClick: log('Split Button'), menuProps: splitButtonProps }),
            React.createElement(DefaultButton, { text: "I do not have a keytip" })),
        React.createElement("p", null, "The 'offset' prop can be used to position the keytip a set distance from the top-left corner of the element."),
        React.createElement(DefaultButton, { styles: marginBottom, keytipProps: keytipMap.ButtonOffset, text: "Button keytip offset 10x10" }),
        React.createElement("p", null, "When a Keytip's corresponding component is disabled, the keytip still appears but cannot be triggered."),
        React.createElement(Toggle, { onText: 'Enabled', offText: 'Disabled', defaultChecked: !btnDisabled, onChange: toggleBtnDisabled, onClick: log('Button') }),
        React.createElement(DefaultButton, { keytipProps: keytipMap.DisabledButton, disabled: btnDisabled, text: (btnDisabled ? 'Disabled' : 'Enabled') + ' Button', onClick: log('Disabled Button') })));
};
//# sourceMappingURL=Keytips.Button.Example.js.map