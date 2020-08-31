define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, Button_1, FocusZone_1, TextField_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var textFieldStyles = { root: { width: 200 } };
    var menuProps = {
        items: [
            {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' },
            },
            {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' },
            },
        ],
    };
    exports.FocusZoneTabbableExample = function () {
        var tokens = { childrenGap: 20 };
        return (React.createElement(Stack_1.Stack, { tokens: tokens, horizontalAlign: "start" },
            React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, handleTabKey: FocusZone_1.FocusZoneTabbableElements.all, isCircularNavigation: true },
                React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                    React.createElement("span", null, "Circular Tabbable FocusZone: "),
                    React.createElement(Button_1.DefaultButton, null, "Button 1"),
                    React.createElement(Button_1.DefaultButton, null, "Button 2"),
                    React.createElement(TextField_1.TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                    React.createElement(Button_1.DefaultButton, null, "Button 3"),
                    React.createElement(Button_1.DefaultButton, { text: "Create account", split: true, onClick: alertClicked, splitButtonAriaLabel: "See 2 sample options", menuProps: menuProps }))),
            React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, handleTabKey: FocusZone_1.FocusZoneTabbableElements.inputOnly, isCircularNavigation: false },
                React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                    React.createElement("span", null, "Input Only FocusZone: "),
                    React.createElement(Button_1.DefaultButton, null, "Button 1"),
                    React.createElement(Button_1.DefaultButton, null, "Button 2"),
                    React.createElement(TextField_1.TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                    React.createElement(Button_1.DefaultButton, null, "Button 3")))));
    };
    function alertClicked() {
        alert('Clicked');
    }
});
//# sourceMappingURL=FocusZone.Tabbable.Example.js.map