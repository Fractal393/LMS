define(["require", "exports", "react", "office-ui-fabric-react/lib/Shimmer", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Shimmer_1, Fabric_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var wrapperClass = Styling_1.mergeStyles({
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
            React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.line, width: 40, height: 40 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 },
                ] }),
            React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.line, width: 300, height: 10 },
                    { type: Shimmer_1.ShimmerElementType.line, width: 200, height: 10 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: 100, height: 20 },
                ] })));
    };
    var getCustomElementsExampleTwo = function () {
        return (React.createElement("div", { style: wrapperStyle },
            React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.circle, height: 40 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 },
                ] }),
            React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.line, width: 400, height: 10 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: 100, height: 20 },
                    { type: Shimmer_1.ShimmerElementType.line, width: 500, height: 10 },
                ] })));
    };
    var getCustomElementsExampleThree = function () {
        return (React.createElement("div", { style: wrapperStyle },
            React.createElement(Shimmer_1.ShimmerElementsGroup, { width: '90px', shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.line, height: 80, width: 80 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 80 },
                ] }),
            React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', width: '100%' } },
                React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.circle, height: 40 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 },
                    ] }),
                React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: 'calc(100% - 50px)', shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: '90%', height: 10 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: '10%', height: 20 },
                        { type: Shimmer_1.ShimmerElementType.line, width: '100%', height: 10 },
                    ] }),
                React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: '100%', shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: '80%', height: 10, verticalAlign: 'bottom' },
                        { type: Shimmer_1.ShimmerElementType.gap, width: '20%', height: 20 },
                        { type: Shimmer_1.ShimmerElementType.line, width: '40%', height: 10, verticalAlign: 'bottom' },
                        { type: Shimmer_1.ShimmerElementType.gap, width: '2%', height: 20 },
                        { type: Shimmer_1.ShimmerElementType.line, width: '58%', height: 10, verticalAlign: 'bottom' },
                    ] }))));
    };
    exports.ShimmerCustomElementsExample = function () { return (React.createElement(Fabric_1.Fabric, { className: wrapperClass },
        "Using ShimmerElementsGroup component to build complex structures of the placeholder you need.",
        React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElementsExampleOne(), width: "350" }),
        React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElementsExampleTwo(), width: "550" }),
        React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElementsExampleThree(), width: "90%" }))); };
});
//# sourceMappingURL=Shimmer.CustomElements.Example.js.map