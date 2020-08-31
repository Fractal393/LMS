"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupFileActions = exports.useFileActionsValidation = exports.useFileArrayValidation = exports.cleanupFileArray = exports.isMobileDevice = exports.isFunction = exports.isPlainObject = void 0;
var react_1 = require("react");
var logger_1 = require("./logger");
exports.isPlainObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
};
exports.isFunction = function (value) {
    return !!(value && value.constructor && value.call && value.apply);
};
exports.isMobileDevice = function () {
    // noinspection JSDeprecatedSymbols
    return (typeof window.orientation !== 'undefined' ||
        navigator.userAgent.indexOf('IEMobile') !== -1);
};
/**
 * This function validates the user-provided files array. It checks the following
 * criteria:
 * - `files` is not an array
 * - there are duplicate file IDs
 * - some files are missing `id` field
 * - some files are missing `name` field
 * - some files have invalid type (they are neither an object nor `null`)
 */
exports.cleanupFileArray = function (fileArray, allowNull) {
    var cleanFileArray;
    var warningMessage = null;
    var warningBullets = [];
    if (!Array.isArray(fileArray)) {
        // @ts-ignore
        cleanFileArray = allowNull ? null : [];
        if (!allowNull || fileArray !== null) {
            warningMessage =
                "Provided value was replaced " +
                    ("with " + (allowNull ? 'null' : 'empty array') + ".");
            warningBullets.push("Expected \"files\" to be an array, got type " +
                ("\"" + typeof fileArray + "\" instead (value: " + fileArray + ")."));
        }
    }
    else {
        var indicesToBeRemoved_1 = new Set();
        var seenIds = new Set();
        var duplicateIdSet = new Set();
        var missingIdIndices = [];
        var missingNameIndices = [];
        var invalidTypeIndices = [];
        for (var i = 0; i < fileArray.length; ++i) {
            var file = fileArray[i];
            if (exports.isPlainObject(file)) {
                if (file.id && seenIds.has(file.id)) {
                    duplicateIdSet.add(file.id);
                    indicesToBeRemoved_1.add(i);
                }
                else {
                    seenIds.add(file.id);
                }
                if (!file.name) {
                    missingNameIndices.push(i);
                    indicesToBeRemoved_1.add(i);
                }
                if (!file.id) {
                    missingIdIndices.push(i);
                    indicesToBeRemoved_1.add(i);
                }
            }
            else if (file !== null) {
                invalidTypeIndices.push(i);
                indicesToBeRemoved_1.add(i);
            }
        }
        if (duplicateIdSet.size > 0) {
            warningBullets.push("Some files have duplicate IDs. These IDs appeared multiple " +
                ("times: " + Array.from(duplicateIdSet)));
        }
        if (missingIdIndices.length > 0) {
            warningBullets.push("Some files are missing the \"id\" field. " +
                ("Relevant file indices: " + missingIdIndices.join(', ')));
        }
        if (missingNameIndices.length > 0) {
            warningBullets.push("Some files are missing the \"name\" field. " +
                ("Relevant file indices: " + missingNameIndices.join(', ')));
        }
        if (invalidTypeIndices.length > 0) {
            warningBullets.push("Some files have invalid type (they are neither a plain object nor \"null\"). " +
                ("Relevant file indices: " + invalidTypeIndices.join(', ')));
        }
        if (indicesToBeRemoved_1.size > 0) {
            // @ts-ignore
            cleanFileArray = fileArray.filter(function (value, index) { return !indicesToBeRemoved_1.has(index); });
            warningMessage =
                indicesToBeRemoved_1.size + " offending " +
                    ("file" + (indicesToBeRemoved_1.size === 1 ? ' was' : 's were') + " ") +
                    " removed from the array.";
        }
        else {
            cleanFileArray = fileArray;
        }
    }
    return { cleanFileArray: cleanFileArray, warningMessage: warningMessage, warningBullets: warningBullets };
};
exports.useFileArrayValidation = function (files, folderChain) {
    var _a = react_1.useMemo(function () {
        var errorMessages = [];
        var cleanFilesResult = exports.cleanupFileArray(files, false);
        if (cleanFilesResult.warningMessage) {
            var errorMessage = "The \"files\" prop passed to FileBrowser did not pass validation. " +
                (cleanFilesResult.warningMessage + " ") +
                "The following errors were encountered:";
            logger_1.Logger.error(errorMessage, logger_1.Logger.formatBullets(cleanFilesResult.warningBullets));
            errorMessages.push({
                message: errorMessage,
                bullets: cleanFilesResult.warningBullets,
            });
        }
        return {
            cleanFiles: cleanFilesResult.cleanFileArray,
            errorMessages: errorMessages,
        };
    }, [files]), cleanFiles = _a.cleanFiles, filesErrorMessages = _a.errorMessages;
    var _b = react_1.useMemo(function () {
        var errorMessages = [];
        var cleanFolderChainResult = exports.cleanupFileArray(folderChain, true);
        if (cleanFolderChainResult.warningMessage) {
            var errorMessage = "The \"folderChain\" prop passed to FileBrowser did not pass validation. " +
                (cleanFolderChainResult.warningMessage + " ") +
                "The following errors were encountered:";
            logger_1.Logger.error(errorMessage, logger_1.Logger.formatBullets(cleanFolderChainResult.warningBullets));
            errorMessages.push({
                message: errorMessage,
                bullets: cleanFolderChainResult.warningBullets,
            });
        }
        return {
            cleanFolderChain: cleanFolderChainResult.cleanFileArray,
            errorMessages: errorMessages,
        };
    }, [folderChain]), cleanFolderChain = _b.cleanFolderChain, folderChainErrorMessages = _b.errorMessages;
    return {
        cleanFiles: cleanFiles,
        cleanFolderChain: cleanFolderChain,
        errorMessages: __spreadArrays(filesErrorMessages, folderChainErrorMessages),
    };
};
exports.useFileActionsValidation = function (fileActions, defaultFileActions, includeDefaultFileActions) {
    // === Merge user-provided and default file actions (if default actions are enabled)
    var extendedFileActions = react_1.useMemo(function () {
        if (!includeDefaultFileActions)
            return fileActions;
        // Add default file actions if no actions with the same IDs are present
        var seenFileActionIds = {};
        fileActions.map(function (action) {
            if (action && action.id)
                seenFileActionIds[action.id] = true;
        });
        var extendedFileActions = __spreadArrays(fileActions);
        for (var _i = 0, defaultFileActions_1 = defaultFileActions; _i < defaultFileActions_1.length; _i++) {
            var action = defaultFileActions_1[_i];
            if (seenFileActionIds[action.id])
                continue;
            extendedFileActions.push(action);
        }
        return extendedFileActions;
    }, [fileActions, defaultFileActions, includeDefaultFileActions]);
    // === Validate the extended file action array
    var _a = react_1.useMemo(function () {
        var errorMessages = [];
        var cleanFilesResult = exports.cleanupFileActions(extendedFileActions);
        if (cleanFilesResult.warningMessage) {
            var errorMessage = "The \"fileActions\" prop passed to FileBrowser did not pass " +
                ("validation. " + cleanFilesResult.warningMessage + " ") +
                "The following errors were encountered:";
            logger_1.Logger.error(errorMessage, logger_1.Logger.formatBullets(cleanFilesResult.warningBullets));
            errorMessages.push({
                message: errorMessage,
                bullets: cleanFilesResult.warningBullets,
            });
        }
        return {
            cleanFileActions: cleanFilesResult.cleanFileActions,
            errorMessages: errorMessages,
        };
    }, [extendedFileActions]), cleanFileActions = _a.cleanFileActions, filesErrorMessages = _a.errorMessages;
    return {
        cleanFileActions: cleanFileActions,
        errorMessages: filesErrorMessages,
    };
};
/**
 * This function validates the user-provided file actions array. It checks the following
 * criteria:
 * - `files` is not an array
 * - there are duplicate file action IDs
 * - some file actions are missing `id` field
 * - some files have invalid type (they are not objects)
 */
exports.cleanupFileActions = function (fileActions) {
    var cleanFileActions;
    var warningMessage = null;
    var warningBullets = [];
    if (!Array.isArray(fileActions)) {
        cleanFileActions = [];
        warningMessage = "Provided value was replaced " + "with an empty array.";
        warningBullets.push("Expected \"fileActions\" to be an array, got type " +
            ("\"" + typeof fileActions + "\" instead (value: " + fileActions + ")."));
    }
    else {
        var indicesToBeRemoved_2 = new Set();
        var seenIds = new Set();
        var duplicateIdSet = new Set();
        var missingIdIndices = [];
        var invalidTypeIndices = [];
        for (var i = 0; i < fileActions.length; ++i) {
            var fileAction = fileActions[i];
            if (exports.isPlainObject(fileAction)) {
                if (fileAction.id && seenIds.has(fileAction.id)) {
                    duplicateIdSet.add(fileAction.id);
                    indicesToBeRemoved_2.add(i);
                }
                else {
                    seenIds.add(fileAction.id);
                }
                if (!fileAction.id) {
                    missingIdIndices.push(i);
                    indicesToBeRemoved_2.add(i);
                }
            }
            else {
                invalidTypeIndices.push(i);
                indicesToBeRemoved_2.add(i);
            }
        }
        if (duplicateIdSet.size > 0) {
            warningBullets.push("Some file actions have duplicate IDs. These IDs appeared multiple " +
                ("times: " + Array.from(duplicateIdSet)));
        }
        if (missingIdIndices.length > 0) {
            warningBullets.push("Some file actions are missing the \"id\" field. " +
                ("Relevant file indices: " + missingIdIndices.join(', ')));
        }
        if (invalidTypeIndices.length > 0) {
            warningBullets.push("Some files actions have invalid type (they are not plain object). " +
                ("Relevant file indices: " + invalidTypeIndices.join(', ')));
        }
        if (indicesToBeRemoved_2.size > 0) {
            // @ts-ignore
            cleanFileActions = fileActions.filter(function (value, index) { return !indicesToBeRemoved_2.has(index); });
            warningMessage =
                indicesToBeRemoved_2.size + " offending " +
                    ("file action" + (indicesToBeRemoved_2.size === 1 ? ' was' : 's were') + " ") +
                    " removed from the array.";
        }
        else {
            cleanFileActions = fileActions;
        }
    }
    return { cleanFileActions: cleanFileActions, warningMessage: warningMessage, warningBullets: warningBullets };
};
//# sourceMappingURL=validation.js.map