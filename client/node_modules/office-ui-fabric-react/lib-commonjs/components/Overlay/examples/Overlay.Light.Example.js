"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var react_hooks_1 = require("@uifabric/react-hooks");
var exampleStyles = {
    root: [
        'OverlayExample-content',
        {
            background: 'blue',
            bottom: '0',
            color: 'white',
            left: '0',
            padding: '10px',
            position: 'absolute',
            right: '0',
        },
    ],
};
var getClassNames = office_ui_fabric_react_1.classNamesFunction();
var classNames = getClassNames(exampleStyles, {});
exports.OverlayLightExample = function () {
    var _a = react_hooks_1.useBoolean(false), isOverlayVisible = _a[0], toggleIsOverlayVisible = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: toggleIsOverlayVisible, text: "Show the overlay" }),
        isOverlayVisible && (React.createElement(office_ui_fabric_react_1.Overlay, { onClick: toggleIsOverlayVisible },
            React.createElement("div", { className: classNames.root },
                React.createElement("p", null, "I am content within the overlay."))))));
};
//# sourceMappingURL=Overlay.Light.Example.js.map