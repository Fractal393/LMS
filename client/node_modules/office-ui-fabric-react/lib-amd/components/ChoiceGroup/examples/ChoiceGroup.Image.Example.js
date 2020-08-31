define(["require", "exports", "react", "office-ui-fabric-react/lib/ChoiceGroup", "@uifabric/example-data"], function (require, exports, React, ChoiceGroup_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var options = [
        {
            key: 'bar',
            imageSrc: example_data_1.TestImages.choiceGroupBarUnselected,
            imageAlt: 'Bar chart icon',
            selectedImageSrc: example_data_1.TestImages.choiceGroupBarSelected,
            imageSize: { width: 32, height: 32 },
            text: 'Clustered bar chart',
        },
        {
            key: 'pie',
            imageSrc: example_data_1.TestImages.choiceGroupBarUnselected,
            selectedImageSrc: example_data_1.TestImages.choiceGroupBarSelected,
            imageSize: { width: 32, height: 32 },
            text: 'Pie chart',
        },
    ];
    exports.ChoiceGroupImageExample = function () {
        return React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one image", defaultSelectedKey: "bar", options: options });
    };
});
//# sourceMappingURL=ChoiceGroup.Image.Example.js.map