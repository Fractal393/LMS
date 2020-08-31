import * as React from 'react';
import { Shimmer, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
var wrapperClass = mergeStyles({
    padding: 2,
    selectors: {
        '& > .ms-Shimmer-container': {
            margin: '10px 0',
        },
    },
});
var shimmerWithElementFirstRow = [
    { type: ShimmerElementType.circle },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line },
];
var shimmerWithElementSecondRow = [
    { type: ShimmerElementType.circle, height: 24 },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '5%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16, width: '15%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16 },
];
var shimmerWithElementThirdRow = [
    { type: ShimmerElementType.circle, height: 24 },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '5%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16, width: '15%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16 },
];
var shimmerVerticalElement = [
    { type: ShimmerElementType.circle },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.circle, height: 15, verticalAlign: 'top' },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, verticalAlign: 'bottom', width: '20%' },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 5, verticalAlign: 'top', width: '20%' },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 16, width: '15%' },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 10, verticalAlign: 'bottom' },
];
export var ShimmerBasicExample = function () {
    return (React.createElement(Fabric, { className: wrapperClass },
        "Basic Shimmer with no elements provided. It defaults to a line of 16px height.",
        React.createElement(Shimmer, null),
        React.createElement(Shimmer, { width: "75%" }),
        React.createElement(Shimmer, { width: "50%" }),
        "Basic Shimmer with elements provided.",
        React.createElement(Shimmer, { shimmerElements: shimmerWithElementFirstRow }),
        React.createElement(Shimmer, { shimmerElements: shimmerWithElementSecondRow }),
        React.createElement(Shimmer, { width: "70%", shimmerElements: shimmerWithElementThirdRow }),
        "Variations of vertical alignment for Circles and Lines.",
        React.createElement(Shimmer, { shimmerElements: shimmerVerticalElement })));
};
//# sourceMappingURL=Shimmer.Basic.Example.js.map