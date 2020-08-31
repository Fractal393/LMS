define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/DocumentCard", "office-ui-fabric-react/lib/Image", "@uifabric/example-data"], function (require, exports, tslib_1, React, DocumentCard_1, Image_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var previewProps = {
        getOverflowDocumentCountText: function (overflowCount) { return "+" + overflowCount + " more"; },
        previewImages: [
            {
                name: '2016 Conference Presentation',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreview,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
                width: 318,
                height: 196,
            },
            {
                name: 'New Contoso Collaboration for Conference Presentation Draft',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreviewTwo,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
                width: 318,
                height: 196,
            },
            {
                name: 'Spec Sheet for design',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreviewThree,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
                width: 318,
                height: 196,
            },
            {
                name: 'Contoso Marketing Presentation',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreview,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
                width: 318,
                height: 196,
            },
            {
                name: 'Notes from Ignite conference',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreviewTwo,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
                width: 318,
                height: 196,
            },
            {
                name: 'FY17 Cost Projections',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                previewImageSrc: example_data_1.TestImages.documentPreviewThree,
                iconSrc: example_data_1.TestImages.iconPpt,
                imageFit: Image_1.ImageFit.cover,
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
    exports.DocumentCardCompleteExample = function () { return (React.createElement(DocumentCard_1.DocumentCard, { "aria-label": "Document Card with multiple items, commands and views. Marketing documents. 6 files were uploaded.\nCreated by Annie Lindqvist in February 23, 2016. 432 views." },
        React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewProps)),
        React.createElement(DocumentCard_1.DocumentCardLocation, { location: "Marketing Documents", locationHref: "http://microsoft.com", ariaLabel: "Location, Marketing Documents" }),
        React.createElement(DocumentCard_1.DocumentCardTitle, { title: "6 files were uploaded" }),
        React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created Feb 23, 2016", people: [{ name: 'Annie Lindqvist', profileImageSrc: example_data_1.TestImages.personaFemale }] }),
        React.createElement(DocumentCard_1.DocumentCardActions, { actions: documentCardActions, views: 432 }))); };
});
//# sourceMappingURL=DocumentCard.Complete.Example.js.map