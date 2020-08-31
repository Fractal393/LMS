"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionGroups = exports.useFolderChainComponent = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../../recoil/file-actions.recoil");
var files_recoil_1 = require("../../recoil/files.recoil");
var special_actions_recoil_1 = require("../../recoil/special-actions.recoil");
var icons_types_1 = require("../../types/icons.types");
var special_actions_types_1 = require("../../types/special-actions.types");
var file_actions_definitions_1 = require("../../util/file-actions-definitions");
var file_helper_1 = require("../../util/file-helper");
var ChonkyIcon_1 = require("./ChonkyIcon");
/**
 * Generates folder chain HTML components for the `FileToolbar` component.
 */
exports.useFolderChainComponent = function () {
    var folderChain = recoil_1.useRecoilValue(files_recoil_1.folderChainState);
    var dispatchSpecialAction = recoil_1.useRecoilValue(special_actions_recoil_1.dispatchSpecialActionState);
    var folderChainComponent = react_1.useMemo(function () {
        if (!folderChain)
            return folderChain;
        var comps = new Array(Math.max(0, folderChain.length * 2 - 1));
        var _loop_1 = function (i) {
            var file = folderChain[i];
            var isLast = i === folderChain.length - 1;
            var j = i * 2;
            var compProps = {
                key: "folder-chain-entry-" + j,
                className: classnames_1.default({
                    'chonky-folder-chain-entry': true,
                    'chonky-loading': !file,
                }),
            };
            if (file_helper_1.FileHelper.isOpenable(file) && !isLast) {
                compProps.onClick = function () {
                    dispatchSpecialAction({
                        actionId: special_actions_types_1.SpecialAction.OpenFolderChainFolder,
                        file: file,
                    });
                };
            }
            var TagToUse = compProps.onClick ? 'button' : 'div';
            if (TagToUse === 'button')
                compProps.type = 'button';
            comps[j] = (react_1.default.createElement(TagToUse, __assign({}, compProps),
                j === 0 && (react_1.default.createElement("span", { className: "chonky-text-subtle-dark" },
                    react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icons_types_1.ChonkyIconName.folder }),
                    "\u00A0\u00A0")),
                react_1.default.createElement("span", { className: "chonky-folder-chain-entry-name" }, file ? file.name : 'Loading...')));
            if (!isLast) {
                comps[j + 1] = (react_1.default.createElement("div", { key: "folder-chain-separator-" + j, className: "chonky-folder-chain-separator" },
                    react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icons_types_1.ChonkyIconName.folderChainSeparator, size: "xs" })));
            }
        };
        for (var i = 0; i < folderChain.length; ++i) {
            _loop_1(i);
        }
        return react_1.default.createElement("div", { className: "chonky-folder-chain" }, comps);
    }, [folderChain, dispatchSpecialAction]);
    return folderChainComponent;
};
exports.useActionGroups = function () {
    var fileActions = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionsState);
    return react_1.useMemo(function () {
        // Create an array for normal toolbar buttons
        var buttonGroups = [];
        // Create a map used for merging buttons into groups
        var buttonGroupMap = {};
        // Create separate variables for buttons that get special treatment:
        var openParentFolderButtonGroup = null;
        var searchButtonGroup = null;
        for (var _i = 0, fileActions_1 = fileActions; _i < fileActions_1.length; _i++) {
            var action = fileActions_1[_i];
            if (!action.toolbarButton)
                continue;
            var button = action.toolbarButton;
            var group = void 0;
            if (button.group) {
                if (buttonGroupMap[button.group]) {
                    // If group exists, append action to it.
                    group = buttonGroupMap[button.group];
                    group.dropdown = group.dropdown || button.dropdown;
                    group.fileActionIds.push(action.id);
                }
                else {
                    // Otherwise, create a new group.
                    group = {
                        name: button.group,
                        dropdown: button.dropdown,
                        fileActionIds: [action.id],
                    };
                    buttonGroups.push(group);
                    buttonGroupMap[group.name] = group;
                }
            }
            else {
                // If button has no group specified, we put it in a standalone group
                group = {
                    name: button.group,
                    dropdown: button.dropdown,
                    fileActionIds: [action.id],
                };
                // Only add it to the normal groups array if it's not a special button
                if (action.id === file_actions_definitions_1.ChonkyActions.OpenParentFolder.id) {
                    openParentFolderButtonGroup = group;
                }
                else if (action.id === file_actions_definitions_1.ChonkyActions.ToggleSearch.id) {
                    searchButtonGroup = group;
                }
                else {
                    buttonGroups.push(group);
                }
            }
        }
        return { buttonGroups: buttonGroups, openParentFolderButtonGroup: openParentFolderButtonGroup, searchButtonGroup: searchButtonGroup };
    }, [fileActions]);
};
//# sourceMappingURL=FileToolbar-hooks.js.map