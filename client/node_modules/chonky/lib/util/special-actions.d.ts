import { FileArray } from '../types/files.types';
import { FileSelection, SelectionModifiers } from '../types/selection.types';
import { SpecialActionHandlerMap } from '../types/special-actions.types';
import { SelectionUtil } from './selection';
/**
 * Returns a dispatch method meant to be used by child components. This dispatch
 * method is meant for "special" internal actions. It takes a special action, and
 * transforms it into a "file action" that can be handled by the user.
 */
export declare const useSpecialActionDispatcher: (files: FileArray, selection: FileSelection, selectionUtil: SelectionUtil, selectionModifiers: SelectionModifiers) => void;
export declare const useSpecialFileActionHandlerMap: (selectionUtil: SelectionUtil, selectionModifiers: SelectionModifiers) => SpecialActionHandlerMap;
