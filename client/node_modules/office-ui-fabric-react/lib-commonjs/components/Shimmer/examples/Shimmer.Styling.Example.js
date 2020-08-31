"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Shimmer_1 = require("office-ui-fabric-react/lib-commonjs/Shimmer");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
// Custom theme passed to Customizer
var customThemeForShimmer = Styling_1.createTheme({
    palette: {
        // palette slot used in Shimmer for main background
        neutralLight: '#bdd4ed',
        // palette slot used in Shimmer for tip of the moving wave
        neutralLighter: '#7AAFE7',
        // palette slot used in Shimmer for all the space around the shimmering elements
        white: '#0078D4',
    },
});
var shimmerElements = [
    { type: Shimmer_1.ShimmerElementType.circle, height: 24 },
    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
    { type: Shimmer_1.ShimmerElementType.gap, width: '5%' },
    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '15%' },
    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
    { type: Shimmer_1.ShimmerElementType.line, height: 16 },
];
var classNames = Styling_1.mergeStyleSets({
    wrapper: {
        selectors: {
            '& > .ms-Shimmer-container': {
                margin: '10px 0',
            },
        },
    },
    themedBackgroundWrapper: {
        padding: 20,
        margin: '10px 0',
        height: 100,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
        // using the palette color to match the gaps and borders of the shimmer.
        background: customThemeForShimmer.palette.white,
        selectors: {
            '& > .ms-Shimmer-container': {
                flexGrow: 1,
            },
        },
    },
    themedBackgroundWrapper2: {
        width: 400,
        height: 100,
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // using the palette color to match the gaps and borders of the shimmer.
        background: customThemeForShimmer.palette.white,
        outline: "1px solid " + customThemeForShimmer.palette.neutralPrimary,
        outlineOffset: '-10px',
    },
    indent: {
        paddingLeft: 18,
    },
});
// Passing a color to match the background color of the containing div.
var getCustomElements = function (backgroundColor) {
    return (React.createElement("div", { style: { display: 'flex' } },
        React.createElement(Shimmer_1.ShimmerElementsGroup, { backgroundColor: backgroundColor, shimmerElements: [
                { type: Shimmer_1.ShimmerElementType.circle, height: 40 },
                { type: Shimmer_1.ShimmerElementType.gap, width: 16, height: 40 },
            ] }),
        React.createElement(Shimmer_1.ShimmerElementsGroup, { backgroundColor: backgroundColor, flexWrap: true, width: "100%", shimmerElements: [
                { type: Shimmer_1.ShimmerElementType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
                { type: Shimmer_1.ShimmerElementType.line, width: '90%', height: 8 },
                { type: Shimmer_1.ShimmerElementType.gap, width: '10%', height: 20 },
            ] })));
};
var getShimmerStyles = function (props) {
    return {
        shimmerWrapper: [
            {
                backgroundColor: '#deecf9',
            },
        ],
        shimmerGradient: [
            {
                backgroundColor: '#deecf9',
                backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #c7e0f4 50%, rgba(255, 255, 255, 0) 100%)',
            },
        ],
    };
};
exports.ShimmerStylingExample = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, "Style overrides of shimmering wave and space around in cases where Shimmer is placed on backgrounds different than the main background of the app. There are several scenarios that can be considered bellow:"),
        React.createElement("div", null,
            React.createElement("b", null, "1."),
            " The recommended way by using the ",
            React.createElement("b", null, "shimmerColors"),
            " prop which in turn has 2 sub-scenarios:"),
        React.createElement("div", { className: classNames.indent },
            React.createElement("b", null, "a. "),
            "When using",
            React.createElement("b", null, "shimmerElements"),
            " prop to build the placeholder you can pass all 3 possible colors to",
            React.createElement("b", null, "shimmerColors"),
            " prop."),
        React.createElement("div", { className: classNames.themedBackgroundWrapper },
            React.createElement(Shimmer_1.Shimmer, { shimmerColors: {
                    shimmer: customThemeForShimmer.palette.themeTertiary,
                    shimmerWave: customThemeForShimmer.palette.themeSecondary,
                    background: customThemeForShimmer.palette.white,
                }, shimmerElements: shimmerElements })),
        React.createElement("div", { className: classNames.indent },
            React.createElement("b", null, "b. "),
            "When using ",
            React.createElement("b", null, "customElementsGroup"),
            " prop to build the placeholder:"),
        React.createElement("div", { className: classNames.themedBackgroundWrapper2 },
            React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElements(customThemeForShimmer.palette.white), width: "300", shimmerColors: {
                    shimmer: customThemeForShimmer.palette.themeTertiary,
                    shimmerWave: customThemeForShimmer.palette.themeSecondary,
                } })),
        React.createElement("div", null,
            React.createElement("b", null, "2. "),
            "Another way of doing it by using ",
            React.createElement("b", null, "Customizer"),
            " component wrapper."),
        React.createElement(Utilities_1.Customizer, { settings: { theme: tslib_1.__assign({}, customThemeForShimmer) } },
            React.createElement("div", { className: classNames.themedBackgroundWrapper2 },
                React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElements(), width: "300" }))),
        React.createElement("div", null,
            React.createElement("b", null, "3. "),
            "Style overrides of shimmering wave using ",
            React.createElement("b", null, "styles"),
            " prop."),
        React.createElement("div", { className: classNames.wrapper },
            React.createElement(Shimmer_1.Shimmer, { width: "75%", styles: getShimmerStyles }),
            React.createElement(Shimmer_1.Shimmer, { width: "75%", styles: getShimmerStyles }),
            React.createElement(Shimmer_1.Shimmer, { width: "75%", styles: getShimmerStyles }),
            React.createElement(Shimmer_1.Shimmer, { width: "75%", styles: getShimmerStyles }),
            React.createElement(Shimmer_1.Shimmer, { width: "75%", styles: getShimmerStyles }))));
};
//# sourceMappingURL=Shimmer.Styling.Example.js.map