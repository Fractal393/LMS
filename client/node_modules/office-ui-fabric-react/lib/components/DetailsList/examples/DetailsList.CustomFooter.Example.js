import { __assign, __extends } from "tslib";
import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, DetailsRow, SelectionMode, DetailsRowCheck, } from 'office-ui-fabric-react/lib/DetailsList';
var DetailsListCustomFooterExample = /** @class */ (function (_super) {
    __extends(DetailsListCustomFooterExample, _super);
    function DetailsListCustomFooterExample(props) {
        var _this = _super.call(this, props) || this;
        _this._items = [];
        for (var i = 0; i < 5; i++) {
            _this._items.push({
                key: i,
                name: 'Item ' + i,
                value: i,
            });
        }
        _this._columns = [
            { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
        ];
        return _this;
    }
    DetailsListCustomFooterExample.prototype.render = function () {
        return (React.createElement(DetailsList, { items: this._items, columns: this._columns, setKey: "set", layoutMode: DetailsListLayoutMode.justified, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox", onRenderDetailsFooter: this._onRenderDetailsFooter }));
    };
    DetailsListCustomFooterExample.prototype._onRenderDetailsFooter = function (detailsFooterProps) {
        return (React.createElement(DetailsRow, __assign({}, detailsFooterProps, { columns: detailsFooterProps.columns, item: {}, itemIndex: -1, groupNestingDepth: detailsFooterProps.groupNestingDepth, selectionMode: SelectionMode.single, selection: detailsFooterProps.selection, onRenderItemColumn: _renderDetailsFooterItemColumn, onRenderCheck: _onRenderCheckForFooterRow })));
    };
    return DetailsListCustomFooterExample;
}(React.Component));
export { DetailsListCustomFooterExample };
var _renderDetailsFooterItemColumn = function (item, index, column) {
    if (column) {
        return (React.createElement("div", null,
            React.createElement("b", null, column.name)));
    }
    return undefined;
};
var detailsRowCheckStyles = { root: { visibility: 'hidden' } };
var _onRenderCheckForFooterRow = function (props) {
    return React.createElement(DetailsRowCheck, __assign({}, props, { styles: detailsRowCheckStyles, selected: true }));
};
//# sourceMappingURL=DetailsList.CustomFooter.Example.js.map