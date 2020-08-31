import * as React from 'react';
import { useConstCallback } from './useConstCallback';
/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
export function useBoolean(initialState) {
    var _a = React.useState(initialState), value = _a[0], setValue = _a[1];
    // Storing the value in a ref is redundant but allows the `toggle` callback to have a
    // constant identity, which overall is probably better for consumers' perf.
    var valueRef = React.useRef(value);
    var setTrue = useConstCallback(function () {
        setValue(true);
        valueRef.current = true;
    });
    var setFalse = useConstCallback(function () {
        setValue(false);
        valueRef.current = false;
    });
    var toggle = useConstCallback(function () { return (valueRef.current ? setFalse() : setTrue()); });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map