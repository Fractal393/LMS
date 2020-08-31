import { __assign } from "tslib";
import * as React from 'react';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TestImages } from '@uifabric/example-data';
export var PersonaAlternateExample = function () {
    var examplePersona = {
        imageUrl: TestImages.personaFemale,
        imageInitials: 'AR',
        text: 'Annie Reid',
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        showSecondaryText: true,
    };
    return (React.createElement(Stack, { tokens: { childrenGap: 10 } },
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size24, presence: PersonaPresence.none, imageAlt: "Annie Ried, status is unknown" })),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size32, presence: PersonaPresence.none, imageAlt: "Annie Ried, status is unknown" })),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size32, presence: PersonaPresence.online, imageAlt: "Annie Ried, status is available at 4 PM" }))));
};
//# sourceMappingURL=Persona.Alternate.Example.js.map