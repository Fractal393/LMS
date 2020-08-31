define(["require", "exports", "react", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label"], function (require, exports, React, Image_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageDefaultExample = function () { return (React.createElement("div", null,
        React.createElement("p", null, "With no imageFit property set, the width and height props control the size of the frame. Depending on which of those props is used, the image may scale to fit the frame."),
        React.createElement(Label_1.Label, null, "Without a width or height specified, the frame remains at its natural size and the image will not be scaled."),
        React.createElement(Image_1.Image, { src: "http://placehold.it/350x150", alt: "Example with no image fit value and no height or width is specified." }),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "If only a width is provided, the frame will be set to that width. The image will scale proportionally to fill the available width."),
        React.createElement(Image_1.Image, { src: "http://placehold.it/350x150", alt: "Example with no image fit value and only width is specified.", width: 600 }),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "If only a height is provided, the frame will be set to that height. The image will scale proportionally to fill the available height."),
        React.createElement(Image_1.Image, { src: "http://placehold.it/350x150", alt: "Example with no image fit value and only height is specified.", height: 100 }),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null,
            "If both width and height are provided, the frame will be set to that width and height. The image will scale to fill both the available width and height. ",
            React.createElement("strong", null, "This may result in a distorted image.")),
        React.createElement(Image_1.Image, { src: "http://placehold.it/350x150", alt: "Example with no image fit value and height or width is specified.", width: 100, height: 100 }))); };
});
//# sourceMappingURL=Image.Default.Example.js.map