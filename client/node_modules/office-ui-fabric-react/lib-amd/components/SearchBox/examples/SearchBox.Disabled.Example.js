define(["require", "exports", "react", "office-ui-fabric-react/lib/SearchBox", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, SearchBox_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = { childrenGap: 20 };
    exports.SearchBoxDisabledExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", disabled: true }),
        React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", underlined: true, disabled: true }))); };
});
//# sourceMappingURL=SearchBox.Disabled.Example.js.map