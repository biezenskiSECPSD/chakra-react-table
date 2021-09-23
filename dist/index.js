

function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var reactTable = require('react-table');
var react = require('@chakra-ui/react');
var cg = require('react-icons/cg');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ChakraReactTable = function (_a) {
    var columns = _a.columns, data = _a.data, _b = _a.rowCursor, rowCursor = _b === void 0 ? undefined : _b, _c = _a.handleOnRowClick, handleOnRowClick = _c === void 0 ? undefined : _c, _d = _a.initialStateSortBy, initialStateSortBy = _d === void 0 ? [] : _d;
    var _e = reactTable.useTable({
        columns: columns,
        data: data,
        initialState: {
            pageIndex: 0,
            pageSize: 15,
            sortBy: initialStateSortBy,
        },
    }, reactTable.useSortBy, reactTable.usePagination), getTableProps = _e.getTableProps, getTableBodyProps = _e.getTableBodyProps, headerGroups = _e.headerGroups, page = _e.page, prepareRow = _e.prepareRow, canPreviousPage = _e.canPreviousPage, canNextPage = _e.canNextPage, pageOptions = _e.pageOptions, pageCount = _e.pageCount, gotoPage = _e.gotoPage, nextPage = _e.nextPage, previousPage = _e.previousPage, setPageSize = _e.setPageSize, rows = _e.rows, _f = _e.state, pageIndex = _f.pageIndex, pageSize = _f.pageSize;
    return (React__default["default"].createElement(react.Stack, null,
        React__default["default"].createElement(react.Table, __assign({}, getTableProps(), { size: "sm", className: 'responsiveTable' }),
            React__default["default"].createElement(react.Thead, { bg: "gray.50" }, headerGroups.map(function (headerGroup, index) { return (React__default["default"].createElement(react.Tr, __assign({}, headerGroup.getHeaderGroupProps(), { key: "headerGroup" + index }), headerGroup.headers.map(function (column) { return (React__default["default"].createElement(react.Th, { pt: 6, key: "column" + column.id },
                React__default["default"].createElement(react.Flex, __assign({ align: "center", gridGap: 2 }, column.getHeaderProps(column.getSortByToggleProps())),
                    column.render('Header'),
                    column.isSorted ? (column.isSortedDesc ? (React__default["default"].createElement(cg.CgChevronDown, null)) : (React__default["default"].createElement(cg.CgChevronUp, null))) : ('')),
                React__default["default"].createElement(react.Box, { py: 2 }, column.canFilter
                    ? column.render('Filter')
                    : null))); }))); })),
            React__default["default"].createElement(react.Tbody, __assign({}, getTableBodyProps()),
                rows.length === 0 && (React__default["default"].createElement(react.Td, { colSpan: 100 },
                    React__default["default"].createElement(react.Center, { p: 8 },
                        React__default["default"].createElement(react.Text, { fontSize: 'md', fontWeight: 600 }, "No rows to display")))),
                page.map(function (row) {
                    prepareRow(row);
                    return (React__default["default"].createElement(react.Tr, __assign({}, row.getRowProps(), { key: row.id, cursor: rowCursor, _hover: { backgroundColor: 'gray.100' }, onClick: function () {
                            return handleOnRowClick
                                ? handleOnRowClick(row.original)
                                : undefined;
                        } }), row.cells.map(function (cell, index) { return (React__default["default"].createElement(react.Td, __assign({}, cell.getCellProps(), { key: "row" + index, className: 'pivoted' }),
                        headerGroups.map(function (headerGroup) {
                            return (React__default["default"].createElement(react.Box, { key: JSON.stringify(headerGroup) + "-container" }, headerGroup.headers.map(function (column, i) {
                                return cell.column
                                    .Header ===
                                    column.Header ? (React__default["default"].createElement(react.Box, { key: "mobile-table-header-" + column.Header + "-" + i, className: 'tdBefore' }, column.render('Header'))) : null;
                            })));
                        }),
                        cell.render('Cell'))); })));
                }))),
        React__default["default"].createElement(react.Stack, { direction: "row", justify: "center", align: "center", wrap: "wrap", spacing: 5, px: 3, pb: 2 },
            React__default["default"].createElement(react.Box, null,
                React__default["default"].createElement(react.Text, { fontSize: "sm" },
                    "Page ",
                    React__default["default"].createElement("b", null, pageIndex + 1),
                    " of",
                    ' ',
                    React__default["default"].createElement("b", null, pageOptions.length))),
            React__default["default"].createElement(react.Flex, null,
                React__default["default"].createElement(react.IconButton, { size: "sm", disabled: !canPreviousPage, variant: "ghost", "aria-label": "Go to first page", icon: React__default["default"].createElement(cg.CgChevronDoubleLeft, null), onClick: function () { return gotoPage(0); } }),
                React__default["default"].createElement(react.IconButton, { size: "sm", disabled: !canPreviousPage, variant: "ghost", "aria-label": "Go back a page", icon: React__default["default"].createElement(cg.CgChevronLeft, null), onClick: function () { return previousPage(); } }),
                React__default["default"].createElement(react.IconButton, { size: "sm", disabled: !canNextPage, variant: "ghost", "aria-label": "Go to next page", icon: React__default["default"].createElement(cg.CgChevronRight, null), onClick: function () { return nextPage(); } }),
                React__default["default"].createElement(react.IconButton, { size: "sm", disabled: !canNextPage, variant: "ghost", "aria-label": "Go to last page", icon: React__default["default"].createElement(cg.CgChevronDoubleRight, null), onClick: function () { return gotoPage(pageCount - 1); } })),
            React__default["default"].createElement(react.Spacer, null),
            React__default["default"].createElement(react.Text, { fontSize: "sm", fontStyle: "italic", fontWeight: 500 },
                rows.length,
                " rows"),
            React__default["default"].createElement(react.Box, null,
                React__default["default"].createElement(react.Select, { size: "sm", value: pageSize, onChange: function (e) { return setPageSize(Number(e.target.value)); } }, [15, 25, 50, 100].map(function (pageSize, index) { return (React__default["default"].createElement("option", { key: "pageSize" + index, value: pageSize },
                    "Show ",
                    pageSize)); }))))));
};

exports["default"] = ChakraReactTable;
//# sourceMappingURL=index.js.map
