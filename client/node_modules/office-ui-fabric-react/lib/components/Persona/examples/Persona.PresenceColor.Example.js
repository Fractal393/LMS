import { __assign } from "tslib";
import * as React from 'react';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
var presenceColors = {
    available: '#fff',
    away: '#fff',
    busy: '#fff',
    dnd: '#fff',
    offline: '#8A8886',
    oof: '#fff',
    background: '#000',
};
var examplePersona = {
    imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    presenceColors: presenceColors,
};
var rootClass = mergeStyles({
    selectors: {
        '.ms-Persona': {
            margin: '0 20px 20px 0',
        },
    },
});
export var PersonaPresenceColorExample = function () {
    return (React.createElement("div", { className: rootClass },
        React.createElement(Stack, { horizontal: true },
            React.createElement(Stack, null,
                React.createElement(Label, null, "Online"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.online, imageAlt: "Annie Lindqvist, status is online." }))),
            React.createElement(Stack, null,
                React.createElement(Label, null, "Online + Out of Office"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.online, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is online and out of office." })))),
        React.createElement(Stack, { horizontal: true },
            React.createElement(Stack, null,
                React.createElement(Label, null, "Away"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.away, imageAlt: "Annie Lindqvist, status is away." }))),
            React.createElement(Stack, null,
                React.createElement(Label, null, "Away + Out of Office"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.away, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is away and out of office." })))),
        React.createElement(Stack, { horizontal: true },
            React.createElement(Stack, null,
                React.createElement(Label, null, "Busy"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.busy, imageAlt: "Annie Lindqvist, status is busy" }))),
            React.createElement(Stack, null,
                React.createElement(Label, null, "Busy + Out of Office"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.busy, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is busy and out of office" })))),
        React.createElement(Stack, { horizontal: true },
            React.createElement(Stack, null,
                React.createElement(Label, null, "DnD"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.dnd, imageAlt: "Annie Lindqvist, status is do not disturb" }))),
            React.createElement(Stack, null,
                React.createElement(Label, null, "DnD + Out of Office"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.dnd, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is do not disturb and out of office" })))),
        React.createElement(Label, null, "Blocked"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.blocked, imageAlt: "Annie Lindqvist, status is blocked" })),
        React.createElement(Stack, { horizontal: true },
            React.createElement(Stack, null,
                React.createElement(Label, null, "Offline"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.offline, imageAlt: "Annie Lindqvist, status is offline" }))),
            React.createElement(Stack, null,
                React.createElement(Label, null, "Offline + Out of Office"),
                React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, hidePersonaDetails: true, presence: PersonaPresence.offline, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is offline and out of office" }))))));
};
//# sourceMappingURL=Persona.PresenceColor.Example.js.map