"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
exports.ImageMaximizeFrameExample = function () {
    var imageProps = {
        src: 'http://placehold.it/500x500',
        imageFit: Image_1.ImageFit.cover,
        maximizeFrame: true,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Where the exact width and height of the image's frame is not known, such as when sizing an image as a percentage of its parent, you can use the \"maximizeFrame\" prop to expand the frame to fill the parent element."),
        React.createElement(Label_1.Label, null, "The image is placed within a landscape container."),
        React.createElement("div", { style: { width: '200px', height: '100px' } },
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: "Example of the maximizeFrame property with a landscape container." }))),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "The image is placed within a portrait container."),
        React.createElement("div", { style: { width: '100px', height: '200px' } },
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: "Example of the maximizeFrame property with a portrait container" })))));
};
//# sourceMappingURL=Image.MaximizeFrame.Example.js.map