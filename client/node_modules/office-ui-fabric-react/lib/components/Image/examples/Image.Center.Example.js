import { __assign } from "tslib";
import * as React from 'react';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
export var ImageCenterExample = function () {
    var imageProps = {
        src: 'http://placehold.it/800x300',
        imageFit: ImageFit.center,
        width: 350,
        height: 150,
        onLoad: function (ev) { return console.log('image loaded', ev); },
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Setting the imageFit property to \"center\" behaves the same as \"none\", while centering the image within the frame."),
        React.createElement(Label, null, "The image is larger than the frame, so all sides are cropped to center the image."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/800x300", alt: 'Example of the image fit value "center" on an image larger than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label, null, "The image is smaller than the frame, so there is empty space within the frame. The image is centered in the available space."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/100x100", alt: 'Example of the image fit value "center" on an image smaller than the frame.' }))));
};
//# sourceMappingURL=Image.Center.Example.js.map