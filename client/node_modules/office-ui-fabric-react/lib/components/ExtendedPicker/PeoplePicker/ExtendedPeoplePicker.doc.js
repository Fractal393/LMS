import * as React from 'react';
import { ExtendedPeoplePickerBasicExample } from '../examples/ExtendedPeoplePicker.Basic.Example';
import { ExtendedPeoplePickerControlledExample } from '../examples/ExtendedPeoplePicker.Controlled.Example';
var ExtendedPeoplePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Basic.Example.tsx');
var ExtendedPeoplePickerControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Controlled.Example.tsx');
export var ExtendedPeoplePickerPageProps = {
    title: 'ExtendedPeoplePicker',
    componentName: 'ExtendedPeoplePicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ExtendedPicker/PeoplePicker',
    examples: [
        {
            title: 'Extended People Picker (uncontrolled)',
            code: ExtendedPeoplePickerBasicExampleCode,
            view: React.createElement(ExtendedPeoplePickerBasicExample, null),
        },
        {
            title: 'Extended People Picker (controlled)',
            code: ExtendedPeoplePickerControlledExampleCode,
            view: React.createElement(ExtendedPeoplePickerControlledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerOverview.md'),
    bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerBestPractices.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=ExtendedPeoplePicker.doc.js.map