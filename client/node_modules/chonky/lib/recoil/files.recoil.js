"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileDataState = exports.fileMapState = exports.parentFolderState = exports.folderChainState = exports.filesState = void 0;
var recoil_1 = require("recoil");
//
// ==== Atoms
exports.filesState = recoil_1.atom({
    key: 'filesState',
    default: [],
});
exports.folderChainState = recoil_1.atom({
    key: 'folderChainState',
    default: null,
});
exports.parentFolderState = recoil_1.atom({
    key: 'parentFolderState',
    default: null,
});
//
// ==== Selectors
exports.fileMapState = recoil_1.selector({
    key: 'fileMapState',
    get: function (_a) {
        var get = _a.get;
        var files = get(exports.filesState);
        var fileMap = {};
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            if (!file)
                continue;
            fileMap[file.id] = file;
        }
        return fileMap;
    },
});
exports.fileDataState = recoil_1.selectorFamily({
    key: 'fileDataState',
    get: function (fileId) { return function (_a) {
        var get = _a.get;
        if (!fileId)
            return null;
        var fileMap = get(exports.fileMapState);
        var file = fileMap[fileId];
        return file !== null && file !== void 0 ? file : null;
    }; },
});
//# sourceMappingURL=files.recoil.js.map