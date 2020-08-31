define(["require", "exports", "react", "office-ui-fabric-react/lib/Facepile", "@uifabric/example-data"], function (require, exports, React, Facepile_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var overflowButtonProps = {
        ariaLabel: 'More users',
        onClick: function (ev) { return alert('overflow icon clicked'); },
    };
    exports.FacepileAddFaceExample = function () {
        var _a = React.useState(0), numberOfFaces = _a[0], setNumberOfFaces = _a[1];
        var personas = React.useMemo(function () { return example_data_1.facepilePersonas.slice(0, numberOfFaces); }, [numberOfFaces]);
        var addButtonProps = React.useMemo(function () { return ({
            ariaLabel: 'Add a new person',
            onClick: function (ev) { return setNumberOfFaces(numberOfFaces + 1); },
        }); }, [numberOfFaces]);
        return (React.createElement(Facepile_1.Facepile, { personas: personas, maxDisplayablePersonas: 5, overflowButtonProps: overflowButtonProps, overflowButtonType: Facepile_1.OverflowButtonType.descriptive, showAddButton: true, addButtonProps: addButtonProps, ariaDescription: "To move through the items use left and right arrow keys." }));
    };
});
//# sourceMappingURL=Facepile.AddFace.Example.js.map