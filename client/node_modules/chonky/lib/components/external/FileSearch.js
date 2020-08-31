"use strict";
/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
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
exports.FileSearch = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var search_recoil_1 = require("../../recoil/search.recoil");
var icons_types_1 = require("../../types/icons.types");
var hooks_helpers_1 = require("../../util/hooks-helpers");
var ChonkyIcon_1 = require("./ChonkyIcon");
exports.FileSearch = function () {
    var setSearchBarEnabled = recoil_1.useSetRecoilState(search_recoil_1.searchBarEnabledState);
    var _a = recoil_1.useRecoilState(search_recoil_1.searchBarVisibleState), searchBarVisible = _a[0], setSearchBarVisible = _a[1];
    var _b = recoil_1.useRecoilState(search_recoil_1.searchFilterState), globalSearchFilter = _b[0], setGlobalSearchFilter = _b[1];
    // Notify all other components that search bar is mounted.
    react_1.useEffect(function () {
        setSearchBarEnabled(true);
        return function () { return setSearchBarEnabled(false); };
    }, [setSearchBarEnabled]);
    // Show a loading indicator during debounce periods to help user realise that a
    // debounce period is in effect.
    var _c = react_1.useState(false), showLoadingIndicator = _c[0], setShowLoadingIndicator = _c[1];
    // Define a local search filter and its debounced version
    var _d = react_1.useState(globalSearchFilter), localFilter = _d[0], setLocalFilter = _d[1];
    var _e = hooks_helpers_1.useDebounce(localFilter, 500), debouncedFilter = _e[0], setDebouncedFilter = _e[1];
    // === Debounced global filter update
    react_1.useEffect(function () {
        setShowLoadingIndicator(false);
        var trimmedFilter = debouncedFilter.trim();
        setGlobalSearchFilter(trimmedFilter);
    }, [debouncedFilter, setShowLoadingIndicator, setGlobalSearchFilter]);
    // === Search bar showing/hiding logic
    var inputRef = react_1.default.useRef(null);
    react_1.useEffect(function () {
        if (searchBarVisible) {
            // When the search bar is shown, focus the input
            if (inputRef.current)
                inputRef.current.focus();
        }
        else {
            // When the search bar is hidden, clear out the search filter
            setShowLoadingIndicator(false);
            setLocalFilter('');
            setDebouncedFilter('');
        }
    }, [
        inputRef,
        searchBarVisible,
        setShowLoadingIndicator,
        setLocalFilter,
        setDebouncedFilter,
    ]);
    // === Text input handler
    var handleInputChange = react_1.useCallback(function (event) {
        setShowLoadingIndicator(true);
        setLocalFilter(event.target.value);
    }, [setShowLoadingIndicator, setLocalFilter]);
    // === Callback to hide the search when Escape key is pressed inside the search
    var onInputKeyDown = react_1.useCallback(function (event) {
        if (event.nativeEvent.code === 'Enter') {
            // Prevent submitting the form if Chonky is used inside of a form.
            event.preventDefault();
        }
        if (event.nativeEvent.code === 'Escape') {
            setSearchBarVisible(false);
        }
    }, [setSearchBarVisible]);
    var className = classnames_1.default({
        'chonky-file-search': true,
        'chonky-file-search-hidden': !searchBarVisible,
    });
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: "chonky-file-search-input-group" },
            react_1.default.createElement("label", { htmlFor: "chonky-file-search" },
                react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icons_types_1.ChonkyIconName.search, fixedWidth: true })),
            react_1.default.createElement("input", { ref: inputRef, type: "text", id: "chonky-file-search", value: localFilter, placeholder: "Type to search...", onChange: handleInputChange, onKeyDown: onInputKeyDown }),
            react_1.default.createElement("div", { className: "chonky-file-search-input-group-loading" }, showLoadingIndicator && (react_1.default.createElement("span", { className: "chonky-file-search-input-group-loading-indicator" },
                react_1.default.createElement(ChonkyIcon_1.ChonkyIconFA, { icon: icons_types_1.ChonkyIconName.loading, spin: true })))))));
};
//# sourceMappingURL=FileSearch.js.map