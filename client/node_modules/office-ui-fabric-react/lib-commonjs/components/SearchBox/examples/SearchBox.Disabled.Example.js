"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib-commonjs/SearchBox");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var stackTokens = { childrenGap: 20 };
exports.SearchBoxDisabledExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
    React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", disabled: true }),
    React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", underlined: true, disabled: true }))); };
//# sourceMappingURL=SearchBox.Disabled.Example.js.map