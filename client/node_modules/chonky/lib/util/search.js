"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileSearch = void 0;
var fuzzy_search_1 = __importDefault(require("fuzzy-search"));
var react_1 = require("react");
var recoil_1 = require("recoil");
var search_recoil_1 = require("../recoil/search.recoil");
exports.useFileSearch = function (files) {
    var searchFilter = recoil_1.useRecoilValue(search_recoil_1.searchFilterState);
    return react_1.useMemo(function () {
        if (!searchFilter)
            return files;
        var searcher = new fuzzy_search_1.default(files.filter(function (f) { return !!f; }), ['name'], { caseSensitive: false, sort: true });
        return searcher.search(searchFilter);
    }, [files, searchFilter]);
};
//# sourceMappingURL=search.js.map