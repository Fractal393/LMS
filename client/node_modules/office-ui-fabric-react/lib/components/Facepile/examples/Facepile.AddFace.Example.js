import * as React from 'react';
import { Facepile, OverflowButtonType } from 'office-ui-fabric-react/lib/Facepile';
import { facepilePersonas } from '@uifabric/example-data';
var overflowButtonProps = {
    ariaLabel: 'More users',
    onClick: function (ev) { return alert('overflow icon clicked'); },
};
export var FacepileAddFaceExample = function () {
    var _a = React.useState(0), numberOfFaces = _a[0], setNumberOfFaces = _a[1];
    var personas = React.useMemo(function () { return facepilePersonas.slice(0, numberOfFaces); }, [numberOfFaces]);
    var addButtonProps = React.useMemo(function () { return ({
        ariaLabel: 'Add a new person',
        onClick: function (ev) { return setNumberOfFaces(numberOfFaces + 1); },
    }); }, [numberOfFaces]);
    return (React.createElement(Facepile, { personas: personas, maxDisplayablePersonas: 5, overflowButtonProps: overflowButtonProps, overflowButtonType: OverflowButtonType.descriptive, showAddButton: true, addButtonProps: addButtonProps, ariaDescription: "To move through the items use left and right arrow keys." }));
};
//# sourceMappingURL=Facepile.AddFace.Example.js.map