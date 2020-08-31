define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, Persona_1, Label_1, Stack_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var rootClass = Styling_1.mergeStyles({
        selectors: {
            '.ms-Persona': {
                margin: '0 20px 20px 0',
            },
        },
    });
    exports.PersonaPresenceColorExample = function () {
        return (React.createElement("div", { className: rootClass },
            React.createElement(Stack_1.Stack, { horizontal: true },
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Online"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.online, imageAlt: "Annie Lindqvist, status is online." }))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Online + Out of Office"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.online, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is online and out of office." })))),
            React.createElement(Stack_1.Stack, { horizontal: true },
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Away"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.away, imageAlt: "Annie Lindqvist, status is away." }))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Away + Out of Office"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.away, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is away and out of office." })))),
            React.createElement(Stack_1.Stack, { horizontal: true },
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Busy"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.busy, imageAlt: "Annie Lindqvist, status is busy" }))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Busy + Out of Office"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.busy, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is busy and out of office" })))),
            React.createElement(Stack_1.Stack, { horizontal: true },
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "DnD"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.dnd, imageAlt: "Annie Lindqvist, status is do not disturb" }))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "DnD + Out of Office"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.dnd, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is do not disturb and out of office" })))),
            React.createElement(Label_1.Label, null, "Blocked"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.blocked, imageAlt: "Annie Lindqvist, status is blocked" })),
            React.createElement(Stack_1.Stack, { horizontal: true },
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Offline"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.offline, imageAlt: "Annie Lindqvist, status is offline" }))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement(Label_1.Label, null, "Offline + Out of Office"),
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, hidePersonaDetails: true, presence: Persona_1.PersonaPresence.offline, isOutOfOffice: true, imageAlt: "Annie Lindqvist, status is offline and out of office" }))))));
    };
});
//# sourceMappingURL=Persona.PresenceColor.Example.js.map