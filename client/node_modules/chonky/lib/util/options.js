"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOptions = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var file_actions_recoil_1 = require("../recoil/file-actions.recoil");
var options_recoil_1 = require("../recoil/options.recoil");
var file_actions_definitions_1 = require("./file-actions-definitions");
exports.useOptions = function (files) {
    var fileActions = recoil_1.useRecoilValue(file_actions_recoil_1.fileActionsState);
    var setOptionMap = recoil_1.useSetRecoilState(options_recoil_1.optionMapState);
    react_1.useEffect(function () {
        var optionMap = {};
        for (var _i = 0, fileActions_1 = fileActions; _i < fileActions_1.length; _i++) {
            var action = fileActions_1[_i];
            if (!action.option)
                continue;
            optionMap[action.option.id] = action.option.defaultValue;
        }
        setOptionMap(optionMap);
    }, [fileActions, setOptionMap]);
    var showHiddenFileState = recoil_1.useRecoilValue(options_recoil_1.optionState(file_actions_definitions_1.ChonkyActions.ToggleHiddenFiles.option.id));
    return react_1.useMemo(function () {
        if (showHiddenFileState !== false)
            return files;
        return files.filter(function (file) { return !file || !file.isHidden; });
    }, [files, showHiddenFileState]);
};
//# sourceMappingURL=options.js.map