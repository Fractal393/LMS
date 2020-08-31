"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileEntrySizeState = void 0;
var recoil_1 = require("recoil");
var FileList_virtualization_1 = require("../components/external/FileList-virtualization");
//
// ==== Atoms
exports.fileEntrySizeState = recoil_1.atom({
    key: 'fileEntrySizeState',
    default: FileList_virtualization_1.DefaultEntrySize,
});
//# sourceMappingURL=file-list.recoil.js.map