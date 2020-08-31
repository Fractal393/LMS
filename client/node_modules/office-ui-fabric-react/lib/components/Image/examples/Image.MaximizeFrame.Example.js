import { __assign } from "tslib";
import * as React from 'react';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
export var ImageMaximizeFrameExample = function () {
    var imageProps = {
        src: 'http://placehold.it/500x500',
        imageFit: ImageFit.cover,
        maximizeFrame: true,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Where the exact width and height of the image's frame is not known, such as when sizing an image as a percentage of its parent, you can use the \"maximizeFrame\" prop to expand the frame to fill the parent element."),
        React.createElement(Label, null, "The image is placed within a landscape container."),
        React.createElement("div", { style: { width: '200px', height: '100px' } },
            React.createElement(Image, __assign({}, imageProps, { alt: "Example of the maximizeFrame property with a landscape container." }))),
        React.createElement("br", null),
        React.createElement(Label, null, "The image is placed within a portrait container."),
        React.createElement("div", { style: { width: '100px', height: '200px' } },
            React.createElement(Image, __assign({}, imageProps, { alt: "Example of the maximizeFrame property with a portrait container" })))));
};
//# sourceMappingURL=Image.MaximizeFrame.Example.js.map