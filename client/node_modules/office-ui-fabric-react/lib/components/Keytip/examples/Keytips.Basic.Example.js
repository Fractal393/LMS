import * as React from 'react';
import { keytipMap } from 'office-ui-fabric-react/lib/components/Keytip/examples/KeytipSetup';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var pivotItemStyle = { width: 500, paddingTop: 20 };
var stackTokens = { childrenGap: 20 };
var spinButtonStyles = { root: { maxWidth: 200 } };
var sampleOptions = [
    { key: 'A', text: 'Option 1' },
    { key: 'B', text: 'Option 2' },
    { key: 'C', text: 'Option 3' },
];
export var KeytipsBasicExample = function () { return (React.createElement("div", null,
    React.createElement("p", null, "For Pivots, keytips will first show for each of the pivots. After selecting a pivot, the Keytips for its content are shown."),
    React.createElement(Pivot, null,
        React.createElement(PivotItem, { headerText: "Pivot 1", keytipProps: keytipMap.Pivot1Keytip, style: pivotItemStyle },
            React.createElement(Stack, { tokens: stackTokens },
                React.createElement(SpinButton, { label: "Spin Button", keytipProps: keytipMap.SpinButtonKeytip, styles: spinButtonStyles }),
                React.createElement(Toggle, { onText: "Yes", offText: "No", keytipProps: keytipMap.ToggleKeytip }),
                React.createElement("span", null,
                    "Go to",
                    ' ',
                    React.createElement(Link, { keytipProps: keytipMap.LinkKeytip, href: "http://www.bing.com", target: "_blank" }, "Bing")))),
        React.createElement(PivotItem, { headerText: "Pivot 2", keytipProps: keytipMap.Pivot2Keytip, style: pivotItemStyle },
            React.createElement(Stack, { tokens: stackTokens },
                React.createElement(Checkbox, { label: "Checkbox", keytipProps: keytipMap.CheckboxKeytip }),
                React.createElement(Dropdown, { label: "Dropdown", keytipProps: keytipMap.DropdownKeytip, options: sampleOptions }))),
        React.createElement(PivotItem, { headerText: "Pivot 3", keytipProps: keytipMap.Pivot3Keytip, style: pivotItemStyle },
            React.createElement(ComboBox, { label: "Combo Box", keytipProps: keytipMap.ComboBoxKeytip, options: sampleOptions }))))); };
//# sourceMappingURL=Keytips.Basic.Example.js.map