import { __assign } from "tslib";
import * as React from 'react';
import { DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle, } from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { TestImages } from '@uifabric/example-data';
var previewProps = {
    previewImages: [
        {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
    ],
};
var DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];
export var DocumentCardBasicExample = function () { return (React.createElement(DocumentCard, { "aria-label": "Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago.", onClickHref: "http://bing.com" },
    React.createElement(DocumentCardPreview, __assign({}, previewProps)),
    React.createElement(DocumentCardTitle, { title: 'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
            'it_needs_truncating.pptx', shouldTruncate: true }),
    React.createElement(DocumentCardActivity, { activity: "Created a few minutes ago", people: DocumentCardActivityPeople }))); };
//# sourceMappingURL=DocumentCard.Basic.Example.js.map