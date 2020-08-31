/**
 * Hook to ensure a callback function always has the same identity.
 * Unlike `React.useCallback`, this is guaranteed to always return the same value.
 *
 * If the callback should ever change based on dependencies, use `React.useCallback` instead.
 *
 * @param callback - The callback. Only the first value passed is respected.
 * @returns The callback. The identity of this callback will always be the same.
 */
export declare function useConstCallback<T extends (...args: any[]) => any>(callback: T): T;
