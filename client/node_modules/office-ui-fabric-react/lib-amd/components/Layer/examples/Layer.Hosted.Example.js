define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Layer", "office-ui-fabric-react/lib/Styling", "@uifabric/react-hooks"], function (require, exports, tslib_1, React, Toggle_1, Layer_1, Styling_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LayerHostedExample = function () {
        var _a = react_hooks_1.useBoolean(false), showLayer = _a[0], toggleShowLayer = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(false), showLayerNoId = _b[0], toggleShowLayerNoId = _b[1].toggle;
        var _c = react_hooks_1.useBoolean(true), showHost = _c[0], toggleShowHost = _c[1].toggle;
        // Use useId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
        var layerHostId = react_hooks_1.useId('layerHost');
        var content = React.createElement("div", { className: styles.content }, "This is example layer content.");
        return (React.createElement("div", { className: styles.root },
            React.createElement(Toggle_1.Toggle, { label: "Show host", inlineLabel: true, checked: showHost, onChange: toggleShowHost }),
            showHost && React.createElement(Layer_1.LayerHost, { id: layerHostId, className: styles.customHost }),
            React.createElement("p", null, "In some cases, you may need to contain layered content within an area. Create an instance of a LayerHost along with an id, and provide a hostId on the layer to render it within the specific host. (Note that it's important that you don't include children within the LayerHost. It's meant to contain Layered content only.)"),
            React.createElement(Toggle_1.Toggle, { styles: styles.toggle, label: "Render the box below in a Layer and target it at hostId=" + layerHostId, inlineLabel: true, checked: showLayer, onChange: toggleShowLayer }),
            showLayer ? (React.createElement(Layer_1.Layer, { hostId: layerHostId, onLayerDidMount: logDidMount, onLayerWillUnmount: logWillUnmount }, content)) : (content),
            React.createElement("div", { className: styles.nonLayered }, "I am normally below the content."),
            React.createElement("p", null, "If you do not specify a hostId, the hosted layer will default to being fixed to the page by default."),
            React.createElement(Toggle_1.Toggle, { styles: styles.toggle, label: "Render the box below in a Layer without specifying a host, fixing it to the top of the page", inlineLabel: true, checked: showLayerNoId, onChange: toggleShowLayerNoId }),
            showLayerNoId ? (React.createElement(Layer_1.Layer, { onLayerDidMount: logDidMount, onLayerWillUnmount: logWillUnmount }, content)) : (content)));
    };
    var logDidMount = function () { return console.log('layer did mount'); };
    var logWillUnmount = function () { return console.log('layer will unmount'); };
    var toggleStyles = {
        root: { margin: '10px 0' },
    };
    var theme = Styling_1.getTheme();
    var styles = tslib_1.__assign({ toggle: toggleStyles }, Styling_1.mergeStyleSets({
        root: {
            selectors: { p: { marginTop: 30 } },
        },
        customHost: {
            height: 100,
            padding: 20,
            background: 'rgba(255, 0, 0, 0.2)',
            border: '1px dashed ' + theme.palette.black,
            position: 'relative',
            selectors: {
                '&:before': {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    // double quotes required to make the string show up
                    content: '"I am a LayerHost with id=layerhost1"',
                },
            },
        },
        content: [
            {
                backgroundColor: theme.palette.themePrimary,
                color: theme.palette.white,
                lineHeight: '50px',
                padding: '0 20px',
            },
            Styling_1.AnimationClassNames.scaleUpIn100,
        ],
        nonLayered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            lineHeight: '50px',
            padding: '0 20px',
            margin: '8px 0',
        },
    }));
});
//# sourceMappingURL=Layer.Hosted.Example.js.map