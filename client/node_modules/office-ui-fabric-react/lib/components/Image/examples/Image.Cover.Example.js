import { __assign } from "tslib";
import * as React from 'react';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
export var ImageCoverExample = function () {
    var imageProps = {
        src: 'http://placehold.it/500x500',
        imageFit: ImageFit.cover,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Setting the imageFit property to \"cover\" will cause the image to scale up or down proportionally, while cropping from either the top and bottom or sides to completely fill the frame."),
        React.createElement(Label, null, "The image has a wider aspect ratio (more landscape) than the frame, so the image is scaled to fit the height and the sides are cropped evenly."),
        React.createElement(Image, __assign({}, imageProps, { alt: 'Example of the image fit value "cover" on an image wider than the frame.', width: 150, height: 250 })),
        React.createElement("br", null),
        React.createElement(Label, null, "The image has a taller aspect ratio (more portrait) than the frame, so the image is scaled to fit the width and the top and bottom are cropped evenly."),
        React.createElement(Image, __assign({}, imageProps, { alt: 'Example of the image fit value "cover" on an image taller than the frame.', width: 250, height: 150 }))));
};
//# sourceMappingURL=Image.Cover.Example.js.map