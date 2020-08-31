import { Nullable } from 'tsdef';
import { FileAction } from '../types/file-actions.types';
import { FileData } from '../types/files.types';
import { ChonkyIconName } from '../types/icons.types';
import { SpecialAction } from '../types/special-actions.types';
import { FileHelper } from './file-helper';
export declare const ChonkyActions: {
    readonly MoveFilesTo: {
        readonly id: "move_files_to";
    };
    readonly DuplicateFilesTo: {
        readonly id: "duplicate_files_to";
    };
    readonly ChangeSelection: {
        readonly id: "change_selection";
    };
    readonly OpenFiles: {
        readonly id: "open_files";
        readonly requiresSelection: true;
        readonly hotkeys: readonly ["enter"];
        readonly fileFilter: typeof FileHelper.isOpenable;
        readonly toolbarButton: {
            readonly name: "Open selection";
            readonly group: "Actions";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.openFiles;
        };
    };
    readonly OpenParentFolder: {
        readonly id: "open_parent_folder";
        readonly hotkeys: readonly ["backspace"];
        readonly toolbarButton: {
            readonly name: "Go up a directory";
            readonly icon: ChonkyIconName.openParentFolder;
            readonly iconOnly: true;
        };
        readonly specialActionToDispatch: SpecialAction.OpenParentFolder;
    };
    readonly ToggleSearch: {
        readonly id: "toggle_search";
        readonly hotkeys: readonly ["ctrl+f"];
        readonly toolbarButton: {
            readonly name: "Search";
            readonly icon: ChonkyIconName.search;
            readonly iconOnly: true;
        };
        readonly specialActionToDispatch: SpecialAction.ToggleSearchBar;
    };
    readonly SelectAllFiles: {
        readonly id: "select_all_files";
        readonly hotkeys: readonly ["ctrl+a"];
        readonly toolbarButton: {
            readonly name: "Select all files";
            readonly group: "Actions";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.selectAllFiles;
            readonly iconOnly: true;
        };
        readonly specialActionToDispatch: SpecialAction.SelectAllFiles;
    };
    readonly ClearSelection: {
        readonly id: "clear_selection";
        readonly hotkeys: readonly ["escape"];
        readonly toolbarButton: {
            readonly name: "Clear selection";
            readonly group: "Actions";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.clearSelection;
            readonly iconOnly: true;
        };
        readonly specialActionToDispatch: SpecialAction.ClearSelection;
    };
    readonly SortFilesByName: {
        readonly id: "sort_files_by_name";
        readonly sortKeySelector: (file: Nullable<FileData>) => string | undefined;
        readonly toolbarButton: {
            readonly name: "Sort by name";
            readonly group: "Sort";
            readonly dropdown: true;
        };
    };
    readonly SortFilesBySize: {
        readonly id: "sort_files_by_size";
        readonly sortKeySelector: (file: Nullable<FileData>) => number | undefined;
        readonly toolbarButton: {
            readonly name: "Sort by size";
            readonly group: "Sort";
            readonly dropdown: true;
        };
    };
    readonly SortFilesByDate: {
        readonly id: "sort_files_by_date";
        readonly sortKeySelector: (file: Nullable<FileData>) => string | Date | undefined;
        readonly toolbarButton: {
            readonly name: "Sort by date";
            readonly group: "Sort";
            readonly dropdown: true;
        };
    };
    readonly ToggleHiddenFiles: {
        readonly id: "toggle_hidden_files";
        readonly hotkeys: readonly ["ctrl+h"];
        readonly option: {
            readonly id: "show_hidden_files";
            readonly defaultValue: true;
        };
        readonly toolbarButton: {
            readonly name: "Show hidden files";
            readonly group: "Options";
            readonly dropdown: true;
        };
    };
    readonly ToggleShowFoldersFirst: {
        readonly id: "toggle_show_folders_first";
        readonly option: {
            readonly id: "show_folders_first";
            readonly defaultValue: true;
        };
        readonly toolbarButton: {
            readonly name: "Show folders first";
            readonly group: "Options";
            readonly dropdown: true;
        };
    };
    readonly CopyFiles: {
        readonly id: "copy_files";
        readonly requiresSelection: true;
        readonly hotkeys: readonly ["ctrl+c"];
        readonly toolbarButton: {
            readonly name: "Copy selection";
            readonly group: "Actions";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.copy;
        };
    };
    readonly CreateFolder: {
        readonly id: "create_folder";
        readonly toolbarButton: {
            readonly name: "Create folder";
            readonly tooltip: "Create a folder";
            readonly icon: ChonkyIconName.folderCreate;
        };
    };
    readonly UploadFiles: {
        readonly id: "upload_files";
        readonly toolbarButton: {
            readonly name: "Upload files";
            readonly tooltip: "Upload files";
            readonly icon: ChonkyIconName.upload;
        };
    };
    readonly DownloadFiles: {
        readonly id: "download_files";
        readonly requiresSelection: true;
        readonly toolbarButton: {
            readonly name: "Download files";
            readonly group: "Actions";
            readonly tooltip: "Download files";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.download;
        };
    };
    readonly DeleteFiles: {
        readonly id: "delete_files";
        readonly requiresSelection: true;
        readonly hotkeys: readonly ["delete"];
        readonly toolbarButton: {
            readonly name: "Delete files";
            readonly group: "Actions";
            readonly tooltip: "Delete files";
            readonly dropdown: true;
            readonly icon: ChonkyIconName.trash;
        };
    };
};
export declare const DefaultFileActions: FileAction[];
