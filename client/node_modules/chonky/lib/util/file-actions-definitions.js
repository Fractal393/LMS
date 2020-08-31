"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFileActions = exports.ChonkyActions = void 0;
var icons_types_1 = require("../types/icons.types");
var special_actions_types_1 = require("../types/special-actions.types");
var file_helper_1 = require("./file-helper");
exports.ChonkyActions = {
    // Actions triggered by drag & drop
    MoveFilesTo: {
        id: 'move_files_to',
    },
    DuplicateFilesTo: {
        id: 'duplicate_files_to',
    },
    // Actions triggered by file selections
    ChangeSelection: {
        id: 'change_selection',
    },
    // Most important action of all - opening files!
    OpenFiles: {
        id: 'open_files',
        requiresSelection: true,
        hotkeys: ['enter'],
        fileFilter: file_helper_1.FileHelper.isOpenable,
        toolbarButton: {
            name: 'Open selection',
            group: 'Actions',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.openFiles,
        },
    },
    // Toolbar related action
    OpenParentFolder: {
        id: 'open_parent_folder',
        hotkeys: ['backspace'],
        toolbarButton: {
            name: 'Go up a directory',
            icon: icons_types_1.ChonkyIconName.openParentFolder,
            iconOnly: true,
        },
        specialActionToDispatch: special_actions_types_1.SpecialAction.OpenParentFolder,
    },
    ToggleSearch: {
        id: 'toggle_search',
        hotkeys: ['ctrl+f'],
        toolbarButton: {
            name: 'Search',
            icon: icons_types_1.ChonkyIconName.search,
            iconOnly: true,
        },
        specialActionToDispatch: special_actions_types_1.SpecialAction.ToggleSearchBar,
    },
    // Actions related to selection
    SelectAllFiles: {
        id: 'select_all_files',
        hotkeys: ['ctrl+a'],
        toolbarButton: {
            name: 'Select all files',
            group: 'Actions',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.selectAllFiles,
            iconOnly: true,
        },
        specialActionToDispatch: special_actions_types_1.SpecialAction.SelectAllFiles,
    },
    ClearSelection: {
        id: 'clear_selection',
        hotkeys: ['escape'],
        toolbarButton: {
            name: 'Clear selection',
            group: 'Actions',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.clearSelection,
            iconOnly: true,
        },
        specialActionToDispatch: special_actions_types_1.SpecialAction.ClearSelection,
    },
    // Sorting actions
    SortFilesByName: {
        id: 'sort_files_by_name',
        sortKeySelector: function (file) { return (file ? file.name : undefined); },
        toolbarButton: {
            name: 'Sort by name',
            group: 'Sort',
            dropdown: true,
        },
    },
    SortFilesBySize: {
        id: 'sort_files_by_size',
        sortKeySelector: function (file) { return (file ? file.size : undefined); },
        toolbarButton: {
            name: 'Sort by size',
            group: 'Sort',
            dropdown: true,
        },
    },
    SortFilesByDate: {
        id: 'sort_files_by_date',
        sortKeySelector: function (file) {
            return file ? file.modDate : undefined;
        },
        toolbarButton: {
            name: 'Sort by date',
            group: 'Sort',
            dropdown: true,
        },
    },
    // Toggleable options
    ToggleHiddenFiles: {
        id: 'toggle_hidden_files',
        hotkeys: ['ctrl+h'],
        option: {
            id: 'show_hidden_files',
            defaultValue: true,
        },
        toolbarButton: {
            name: 'Show hidden files',
            group: 'Options',
            dropdown: true,
        },
    },
    ToggleShowFoldersFirst: {
        id: 'toggle_show_folders_first',
        option: {
            id: 'show_folders_first',
            defaultValue: true,
        },
        toolbarButton: {
            name: 'Show folders first',
            group: 'Options',
            dropdown: true,
        },
    },
    // Optional actions
    CopyFiles: {
        id: 'copy_files',
        requiresSelection: true,
        hotkeys: ['ctrl+c'],
        toolbarButton: {
            name: 'Copy selection',
            group: 'Actions',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.copy,
        },
    },
    CreateFolder: {
        id: 'create_folder',
        toolbarButton: {
            name: 'Create folder',
            tooltip: 'Create a folder',
            icon: icons_types_1.ChonkyIconName.folderCreate,
        },
    },
    UploadFiles: {
        id: 'upload_files',
        toolbarButton: {
            name: 'Upload files',
            tooltip: 'Upload files',
            icon: icons_types_1.ChonkyIconName.upload,
        },
    },
    DownloadFiles: {
        id: 'download_files',
        requiresSelection: true,
        toolbarButton: {
            name: 'Download files',
            group: 'Actions',
            tooltip: 'Download files',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.download,
        },
    },
    DeleteFiles: {
        id: 'delete_files',
        requiresSelection: true,
        hotkeys: ['delete'],
        toolbarButton: {
            name: 'Delete files',
            group: 'Actions',
            tooltip: 'Delete files',
            dropdown: true,
            icon: icons_types_1.ChonkyIconName.trash,
        },
    },
};
exports.DefaultFileActions = [
    exports.ChonkyActions.MoveFilesTo,
    exports.ChonkyActions.DuplicateFilesTo,
    exports.ChonkyActions.ChangeSelection,
    exports.ChonkyActions.OpenParentFolder,
    exports.ChonkyActions.ToggleSearch,
    exports.ChonkyActions.OpenFiles,
    exports.ChonkyActions.SelectAllFiles,
    exports.ChonkyActions.ClearSelection,
    exports.ChonkyActions.SortFilesByName,
    exports.ChonkyActions.SortFilesBySize,
    exports.ChonkyActions.SortFilesByDate,
    exports.ChonkyActions.ToggleHiddenFiles,
    exports.ChonkyActions.ToggleShowFoldersFirst,
];
//# sourceMappingURL=file-actions-definitions.js.map