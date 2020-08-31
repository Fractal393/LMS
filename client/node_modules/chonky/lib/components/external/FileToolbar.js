"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileToolbar = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var search_recoil_1 = require("../../recoil/search.recoil");
var FileToolbar_hooks_1 = require("./FileToolbar-hooks");
var ToolbarButtonGroup_1 = require("./ToolbarButtonGroup");
exports.FileToolbar = react_1.default.memo(function () {
    var searchBarEnabled = recoil_1.useRecoilValue(search_recoil_1.searchBarEnabledState);
    var folderChainComp = FileToolbar_hooks_1.useFolderChainComponent();
    var _a = FileToolbar_hooks_1.useActionGroups(), buttonGroups = _a.buttonGroups, openParentFolderButtonGroup = _a.openParentFolderButtonGroup, searchButtonGroup = _a.searchButtonGroup;
    return (react_1.default.createElement("div", { className: "chonky-toolbar" },
        react_1.default.createElement("div", { className: "chonky-toolbar-side chonky-toolbar-side-left" },
            openParentFolderButtonGroup && (react_1.default.createElement(ToolbarButtonGroup_1.ToolbarButtonGroup, { group: openParentFolderButtonGroup })),
            folderChainComp),
        react_1.default.createElement("div", { className: "chonky-toolbar-side chonky-toolbar-side-right" },
            buttonGroups.map(function (group, index) { return (react_1.default.createElement(ToolbarButtonGroup_1.ToolbarButtonGroup, { key: "button-group-" + (group.name ? group.name : index), group: group })); }),
            searchBarEnabled && searchButtonGroup && (react_1.default.createElement(ToolbarButtonGroup_1.ToolbarButtonGroup, { group: searchButtonGroup })))));
});
exports.FileToolbar.propTypes = {
    // @ts-ignore
    folderChain: prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([
        prop_types_1.default.string.isRequired,
        prop_types_1.default.oneOf([null]).isRequired,
    ])),
};
//# sourceMappingURL=FileToolbar.js.map