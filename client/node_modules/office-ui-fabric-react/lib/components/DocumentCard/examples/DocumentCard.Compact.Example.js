import { __assign } from "tslib";
import * as React from 'react';
import { DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, DocumentCardType, } from 'office-ui-fabric-react/lib/DocumentCard';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import { TestImages } from '@uifabric/example-data';
var stackTokens = { childrenGap: 20 };
var theme = getTheme();
var palette = theme.palette, fonts = theme.fonts;
var people = [
    { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];
var previewPropsUsingIcon = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OpenFile',
                styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
            },
            width: 144,
        },
    ],
    styles: { previewIcon: { backgroundColor: palette.themePrimary } },
};
var previewProps = {
    getOverflowDocumentCountText: function (overflowCount) { return "+" + overflowCount + " more"; },
    previewImages: [
        {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Contoso Marketing Presentation',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
    ],
};
var previewOutlookUsingIcon = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OutlookLogo',
                styles: {
                    root: {
                        fontSize: fonts.superLarge.fontSize,
                        color: '#0078d7',
                        backgroundColor: palette.neutralLighterAlt,
                    },
                },
            },
            width: 144,
        },
    ],
    styles: {
        previewIcon: { backgroundColor: palette.neutralLighterAlt },
    },
};
export var DocumentCardCompactExample = function () {
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(DocumentCard, { "aria-label": "Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.\n      Created by Roko Kolar a few minutes ago", type: DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardPreview, { previewImages: [previewProps.previewImages[0]] }),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "Revenue stream proposal fiscal year 2016 version02.pptx", shouldTruncate: true }),
                React.createElement(DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[1]] }))),
        React.createElement(DocumentCard, { "aria-label": 'Document Card with folder or site activity. 4 files were uploaded. ' +
                'Created by Annie Lindqvist a few minutes ago', type: DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardPreview, __assign({}, previewProps)),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "4 files were uploaded", shouldTruncate: true }),
                React.createElement(DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[0]] }))),
        React.createElement(DocumentCard, { "aria-label": "Document Card with icon. View and share files. Created by Aaron Reid a few minutes ago", type: DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardPreview, __assign({}, previewPropsUsingIcon)),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "View and share files", shouldTruncate: true }),
                React.createElement(DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[2]] }))),
        React.createElement(DocumentCard, { "aria-label": 'Document Card with email conversation. Conversation about takeaways from annual SharePoint conference. ' +
                'Sent by Christian Bergqvist a few minutes ago', type: DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardPreview, __assign({}, previewOutlookUsingIcon)),
            React.createElement(DocumentCardDetails, null,
                React.createElement(DocumentCardTitle, { title: "Conversation about takeaways from annual SharePoint conference", shouldTruncate: true }),
                React.createElement(DocumentCardActivity, { activity: "Sent a few minutes ago", people: [people[3]] })))));
};
//# sourceMappingURL=DocumentCard.Compact.Example.js.map