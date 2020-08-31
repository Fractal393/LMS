define(["require", "exports", "tslib", "react", "@uifabric/utilities", "./SvgIcon.scss"], function (require, exports, tslib_1, React, utilities_1, classes) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var createSvgIcon = function (_a) {
        var svg = _a.svg, displayName = _a.displayName;
        var Component = function (props) {
            var _a;
            var className = props.className, _b = props.style, style = _b === void 0 ? {} : _b;
            var nativeProps = utilities_1.getNativeProps(props, utilities_1.htmlElementProperties);
            var containerProps = props['aria-label']
                ? {}
                : (_a = {
                        role: 'presentation'
                    },
                    _a['aria-hidden'] = true,
                    _a);
            return React.createElement('span', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, containerProps), nativeProps), { className: utilities_1.css(classes.root, className), style: style }), svg({ classes: classes, props: props }));
        };
        Component.displayName = displayName;
        return Component;
    };
    exports.default = createSvgIcon;
});
//# sourceMappingURL=createSvgIcon.js.map