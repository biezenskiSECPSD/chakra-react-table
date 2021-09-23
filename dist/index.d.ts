/// <reference types="react" />
import { Column } from 'react-table';
declare type ChakraReactTableProps = {
    columns: Array<Column<any>>;
    data: Array<any>;
    rowCursor?: string;
    handleOnRowClick?: (row: Object) => void;
    initialStateSortBy?: Array<{
        id: string;
        desc: boolean;
    }>;
};
declare const ChakraReactTable: ({ columns, data, rowCursor, handleOnRowClick, initialStateSortBy, }: ChakraReactTableProps) => JSX.Element;
export default ChakraReactTable;
