/// <reference types="react" />
import { Nullable } from 'tsdef';
import { ActionGroupData } from '../../types/file-actions.types';
/**
 * Generates folder chain HTML components for the `FileToolbar` component.
 */
export declare const useFolderChainComponent: () => JSX.Element | null;
export declare const useActionGroups: () => {
    buttonGroups: ActionGroupData[];
    openParentFolderButtonGroup: Nullable<ActionGroupData>;
    searchButtonGroup: Nullable<ActionGroupData>;
};
