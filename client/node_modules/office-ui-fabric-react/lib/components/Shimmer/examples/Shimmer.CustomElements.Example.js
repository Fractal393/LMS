import * as React from 'react';
import { Shimmer, ShimmerElementsGroup, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';
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
var wrapperStyle = { display: 'flex' };
var getCustomElementsExampleOne = function () {
    return (React.createElement("div", { style: wrapperStyle },
        React.createElement(ShimmerElementsGroup, { shimmerElements: [
                { type: ShimmerElementType.line, width: 40, height: 40 },
                { type: ShimmerElementType.gap, width: 10, height: 40 },
            ] }),
        React.createElement(ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                { type: ShimmerElementType.line, width: 300, height: 10 },
                { type: ShimmerElementType.line, width: 200, height: 10 },
                { type: ShimmerElementType.gap, width: 100, height: 20 },
            ] })));
};
var getCustomElementsExampleTwo = function () {
    return (React.createElement("div", { style: wrapperStyle },
        React.createElement(ShimmerElementsGroup, { shimmerElements: [
                { type: ShimmerElementType.circle, height: 40 },
                { type: ShimmerElementType.gap, width: 10, height: 40 },
            ] }),
        React.createElement(ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                { type: ShimmerElementType.line, width: 400, height: 10 },
                { type: ShimmerElementType.gap, width: 100, height: 20 },
                { type: ShimmerElementType.line, width: 500, height: 10 },
            ] })));
};
var getCustomElementsExampleThree = function () {
    return (React.createElement("div", { style: wrapperStyle },
        React.createElement(ShimmerElementsGroup, { width: '90px', shimmerElements: [
                { type: ShimmerElementType.line, height: 80, width: 80 },
                { type: ShimmerElementType.gap, width: 10, height: 80 },
            ] }),
        React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', width: '100%' } },
            React.createElement(ShimmerElementsGroup, { shimmerElements: [
                    { type: ShimmerElementType.circle, height: 40 },
                    { type: ShimmerElementType.gap, width: 10, height: 40 },
                ] }),
            React.createElement(ShimmerElementsGroup, { flexWrap: true, width: 'calc(100% - 50px)', shimmerElements: [
                    { type: ShimmerElementType.line, width: '90%', height: 10 },
                    { type: ShimmerElementType.gap, width: '10%', height: 20 },
                    { type: ShimmerElementType.line, width: '100%', height: 10 },
                ] }),
            React.createElement(ShimmerElementsGroup, { flexWrap: true, width: '100%', shimmerElements: [
                    { type: ShimmerElementType.line, width: '80%', height: 10, verticalAlign: 'bottom' },
                    { type: ShimmerElementType.gap, width: '20%', height: 20 },
                    { type: ShimmerElementType.line, width: '40%', height: 10, verticalAlign: 'bottom' },
                    { type: ShimmerElementType.gap, width: '2%', height: 20 },
                    { type: ShimmerElementType.line, width: '58%', height: 10, verticalAlign: 'bottom' },
                ] }))));
};
export var ShimmerCustomElementsExample = function () { return (React.createElement(Fabric, { className: wrapperClass },
    "Using ShimmerElementsGroup component to build complex structures of the placeholder you need.",
    React.createElement(Shimmer, { customElementsGroup: getCustomElementsExampleOne(), width: "350" }),
    React.createElement(Shimmer, { customElementsGroup: getCustomElementsExampleTwo(), width: "550" }),
    React.createElement(Shimmer, { customElementsGroup: getCustomElementsExampleThree(), width: "90%" }))); };
//# sourceMappingURL=Shimmer.CustomElements.Example.js.map