import * as React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TestImages } from '@uifabric/example-data';
var options = [
    {
        key: 'bar',
        imageSrc: TestImages.choiceGroupBarUnselected,
        imageAlt: 'Bar chart icon',
        selectedImageSrc: TestImages.choiceGroupBarSelected,
        imageSize: { width: 32, height: 32 },
        text: 'Clustered bar chart',
    },
    {
        key: 'pie',
        imageSrc: TestImages.choiceGroupBarUnselected,
        selectedImageSrc: TestImages.choiceGroupBarSelected,
        imageSize: { width: 32, height: 32 },
        text: 'Pie chart',
    },
];
export var ChoiceGroupImageExample = function () {
    return React.createElement(ChoiceGroup, { label: "Pick one image", defaultSelectedKey: "bar", options: options });
};
//# sourceMappingURL=ChoiceGroup.Image.Example.js.map