import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { useConstCallback } from '@uifabric/react-hooks';
// The panel type and description are passed in by the PanelSizesExample component (later in this file)
var PanelExample = function (props) {
    var description = props.description, panelType = props.panelType;
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    var a = 'aeiou'.indexOf(description[0]) === -1 ? 'a' : 'an'; // grammar...
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel, { isOpen: isOpen, onDismiss: dismissPanel, type: panelType, customWidth: panelType === PanelType.custom || panelType === PanelType.customNear ? '888px' : undefined, closeButtonAriaLabel: "Close", headerText: "Sample panel" },
            React.createElement("p", null,
                "This is ",
                a,
                " ",
                React.createElement("strong", null, description),
                " panel",
                panelType === PanelType.smallFixedFar ? ' (the default size)' : '',
                "."),
            React.createElement("p", null,
                "Select this size using ",
                React.createElement("code", null, "type={PanelType." + PanelType[panelType] + "}"),
                "."))));
};
var options = [
    { text: 'Small (default)', key: String(PanelType.smallFixedFar) },
    { text: 'Small, near side', key: String(PanelType.smallFixedNear) },
    { text: 'Medium', key: String(PanelType.medium) },
    { text: 'Large', key: String(PanelType.large) },
    { text: 'Large fixed-width', key: String(PanelType.largeFixed) },
    { text: 'Extra large', key: String(PanelType.extraLarge) },
    { text: 'Full-width (fluid)', key: String(PanelType.smallFluid) },
    { text: 'Custom (example: 888px)', key: String(PanelType.custom) },
    { text: 'Custom (example: 888px), near side', key: String(PanelType.customNear) },
];
var dropdownStyles = { root: { maxWidth: 250, marginBottom: 16 } };
var firstPStyle = { marginTop: 0 };
export var PanelSizesExample = function () {
    var _a = React.useState(options[0]), option = _a[0], setOption = _a[1];
    var updateOption = useConstCallback(function (ev, opt) { return setOption(opt); });
    var description = option.text.toLowerCase().replace(' (default)', '');
    return (React.createElement("div", null,
        React.createElement("p", { style: firstPStyle },
            "See the",
            ' ',
            React.createElement(Link, { href: "https://developer.microsoft.com/en-us/fluentui#/controls/web/panel#PanelType" }, "PanelType documentation"),
            ' ',
            "for details on how each option affects panel sizing at different screen widths."),
        React.createElement("p", null, "All panels are anchored to the far side of the screen (right in LTR, left in RTL) unless otherwise specified."),
        React.createElement(Dropdown, { label: "Choose a panel size:", options: options, selectedKey: option.key, onChange: updateOption, styles: dropdownStyles }),
        React.createElement(PanelExample, { panelType: Number(option.key), description: description })));
};
//# sourceMappingURL=Panel.Sizes.Example.js.map