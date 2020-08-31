import React from 'react';
import { AnyFunction } from 'tsdef';
export declare const useDebounce: <T>(value: T, delay: number) => [T, React.Dispatch<React.SetStateAction<T>>];
export declare const useStaticValue: <T>(factory: () => T) => T;
export declare const useInstanceVariable: <T>(value: T) => React.MutableRefObject<T>;
interface UseClickListenerParams {
    onClick?: (event: MouseEvent) => void;
    onInsideClick?: (event: MouseEvent) => void;
    onOutsideClick?: (event: MouseEvent, targetIsAButton: boolean) => void;
}
export declare const useClickListener: <T extends HTMLElement = HTMLDivElement>(params: UseClickListenerParams) => React.RefObject<T>;
export declare const useRefCallbackWithErrorHandling: <FuncType extends AnyFunction>(callbackFunc: FuncType, displayName: string) => (...args: Parameters<FuncType>) => void;
export {};
