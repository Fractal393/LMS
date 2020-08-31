import React from 'react';
import { Nilable, Nullable } from 'tsdef';
import { FileArray, FileData, FileFilter, ReadonlyFileArray } from '../types/files.types';
import { FileSelection, SelectionModifiers } from '../types/selection.types';
export declare const useSelection: (files: FileArray, disableSelection: boolean) => {
    selection: FileSelection;
    selectionSize: number;
    selectionUtilRef: React.MutableRefObject<SelectionUtil>;
    selectionModifiers: SelectionModifiers;
};
/**
 * This helper relies on the `files` and `selection` objects to be passed from the
 * outside. It is safe to use in React components because it doesn't have any
 * internal state, and all methods are static.
 */
export declare class SelectionHelper {
    static getSelectedFiles(files: ReadonlyFileArray, selection: Readonly<FileSelection>, ...filters: Nilable<FileFilter>[]): FileData[];
    static getSelectionSize(files: ReadonlyFileArray, selection: Readonly<FileSelection>, ...filters: Nilable<FileFilter>[]): number;
    static isSelected(selection: Readonly<FileSelection>, file: Nullable<Readonly<FileData>>): boolean;
}
/**
 * This `SelectionUtil` contains an internal reference to `files` and `selection`
 * objects. It is exposed via a React context, and is meant to be used in functions
 * that need to access selection WITHOUT triggering re-renders.
 */
export declare class SelectionUtil {
    private files;
    private selection;
    constructor(files?: FileArray, selection?: FileSelection);
    protected protectedUpdate(files: FileArray, selection: FileSelection): void;
    getSelection(): FileSelection;
    getSelectedFiles(...filters: Nilable<FileFilter>[]): FileData[];
    getSelectionSize(...filters: Nilable<FileFilter>[]): number;
    isSelected(file: Nullable<FileData>): boolean;
}
