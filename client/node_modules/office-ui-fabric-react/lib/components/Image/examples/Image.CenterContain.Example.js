import { __assign } from "tslib";
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react';
export var ImageCenterContainExample = function () {
    var imageProps = {
        imageFit: ImageFit.centerContain,
        width: 200,
        height: 200,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Setting the imageFit property to \"centerContain\" will cause the image to scale up or down proportionally. Images smaller than their frame will be rendered as \"ImageFit.center\", while images larger than both either frame's height or width will render as \"ImageFit.contain\"."),
        React.createElement(Label, null, "The image is smaller than the frame, so it's centered and rendered at its natural size."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/100x150", alt: 'Example of the image fit value "centerContain" on an image smaller than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label, null, "The image has a wider width than the frame so it's contained."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/300x100", alt: 'Example of the image fit value "centerContain" on an image wider than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label, null, "The image is taller than the frame so it's contained."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/100x300", alt: 'Example of the image fit value "centerContain" on an image taller than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label, null, "These images are taller and wider than the frame and so they are contained."),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/400x500", alt: 'Example of the image fit value "centerContain" on an image taller and wider than the frame.' })),
        React.createElement("br", null),
        React.createElement(Image, __assign({}, imageProps, { src: "http://placehold.it/500x400", alt: 'Example of the image fit value "centerContain" on an image taller and wider than the frame.' }))));
};
//# sourceMappingURL=Image.CenterContain.Example.js.map