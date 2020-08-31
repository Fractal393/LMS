"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
var React = require("react");
exports.ImageCenterContainExample = function () {
    var imageProps = {
        imageFit: Image_1.ImageFit.centerContain,
        width: 200,
        height: 200,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Setting the imageFit property to \"centerContain\" will cause the image to scale up or down proportionally. Images smaller than their frame will be rendered as \"ImageFit.center\", while images larger than both either frame's height or width will render as \"ImageFit.contain\"."),
        React.createElement(Label_1.Label, null, "The image is smaller than the frame, so it's centered and rendered at its natural size."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x150", alt: 'Example of the image fit value "centerContain" on an image smaller than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "The image has a wider width than the frame so it's contained."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/300x100", alt: 'Example of the image fit value "centerContain" on an image wider than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "The image is taller than the frame so it's contained."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x300", alt: 'Example of the image fit value "centerContain" on an image taller than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "These images are taller and wider than the frame and so they are contained."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/400x500", alt: 'Example of the image fit value "centerContain" on an image taller and wider than the frame.' })),
        React.createElement("br", null),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/500x400", alt: 'Example of the image fit value "centerContain" on an image taller and wider than the frame.' }))));
};
//# sourceMappingURL=Image.CenterContain.Example.js.map