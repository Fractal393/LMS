import { __assign } from "tslib";
import * as React from 'react';
import { DocumentCard, DocumentCardActions, DocumentCardActivity, DocumentCardLocation, DocumentCardPreview, DocumentCardTitle, } from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { TestImages } from '@uifabric/example-data';
var previewProps = {
    getOverflowDocumentCountText: function (overflowCount) { return "+" + overflowCount + " more"; },
    previewImages: [
        {
            name: '2016 Conference Presentation',
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
        {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
        {
            name: 'Contoso Marketing Presentation',
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
        {
            name: 'Notes from Ignite conference',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
        {
            name: 'FY17 Cost Projections',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
    ],
};
var onActionClick = function (action, ev) {
    console.log("You clicked the " + action + " action");
    ev.stopPropagation();
    ev.preventDefault();
};
var documentCardActions = [
    {
        iconProps: { iconName: 'Share' },
        onClick: onActionClick.bind(this, 'share'),
        ariaLabel: 'share action',
    },
    {
        iconProps: { iconName: 'Pin' },
        onClick: onActionClick.bind(this, 'pin'),
        ariaLabel: 'pin action',
    },
    {
        iconProps: { iconName: 'Ringer' },
        onClick: onActionClick.bind(this, 'notifications'),
        ariaLabel: 'notifications action',
    },
];
export var DocumentCardCompleteExample = function () { return (React.createElement(DocumentCard, { "aria-label": "Document Card with multiple items, commands and views. Marketing documents. 6 files were uploaded.\nCreated by Annie Lindqvist in February 23, 2016. 432 views." },
    React.createElement(DocumentCardPreview, __assign({}, previewProps)),
    React.createElement(DocumentCardLocation, { location: "Marketing Documents", locationHref: "http://microsoft.com", ariaLabel: "Location, Marketing Documents" }),
    React.createElement(DocumentCardTitle, { title: "6 files were uploaded" }),
    React.createElement(DocumentCardActivity, { activity: "Created Feb 23, 2016", people: [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }] }),
    React.createElement(DocumentCardActions, { actions: documentCardActions, views: 432 }))); };
//# sourceMappingURL=DocumentCard.Complete.Example.js.map