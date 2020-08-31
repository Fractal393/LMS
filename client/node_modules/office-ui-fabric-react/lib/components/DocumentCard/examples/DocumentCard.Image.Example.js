import * as React from 'react';
import { DocumentCard, DocumentCardActivity, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, } from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { TestImages } from '@uifabric/example-data';
var people = [
    { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];
var oneNoteIconProps = {
    iconName: 'OneNoteLogo',
    styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
};
export var DocumentCardImageExample = function () {
    var cardStyles = {
        root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
    };
    return (React.createElement("div", null,
        React.createElement(DocumentCard, { "aria-label": 'Document Card with image. How to make a good design. ' +
                'Last modified by Annie Lindqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardImage, { height: 150, imageFit: ImageFit.cover, imageSrc: TestImages.documentPreviewTwo }),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "How to make a good design", shouldTruncate: true })),
            React.createElement(DocumentCardActivity, { activity: "Modified March 13, 2018", people: people.slice(0, 3) })),
        React.createElement(DocumentCard, { "aria-label": 'Document Card with icon. How to make a good design. ' +
                'Last modified by Christian Bergqvist in January 1, 2019.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardImage, { height: 150, imageFit: ImageFit.cover, iconProps: oneNoteIconProps }),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "How to make a good design", shouldTruncate: true })),
            React.createElement(DocumentCardActivity, { activity: "Modified January 1, 2019", people: [people[3]] }))));
};
//# sourceMappingURL=DocumentCard.Image.Example.js.map