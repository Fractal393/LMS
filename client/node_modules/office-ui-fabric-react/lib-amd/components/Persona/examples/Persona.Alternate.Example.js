define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Stack", "@uifabric/example-data"], function (require, exports, tslib_1, React, Persona_1, Stack_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonaAlternateExample = function () {
        var examplePersona = {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'AR',
            text: 'Annie Reid',
            secondaryText: 'Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            showSecondaryText: true,
        };
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size24, presence: Persona_1.PersonaPresence.none, imageAlt: "Annie Ried, status is unknown" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size32, presence: Persona_1.PersonaPresence.none, imageAlt: "Annie Ried, status is unknown" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size32, presence: Persona_1.PersonaPresence.online, imageAlt: "Annie Ried, status is available at 4 PM" }))));
    };
});
//# sourceMappingURL=Persona.Alternate.Example.js.map