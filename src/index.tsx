import {
    Column,
    usePagination,
    useSortBy,
    useTable,
} from 'react-table'
import {
    Box,
    Center,
    Flex,
    IconButton,
    Select,
    Spacer,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import {
    CgChevronDoubleLeft,
    CgChevronDoubleRight,
    CgChevronDown,
    CgChevronLeft,
    CgChevronRight,
    CgChevronUp,
} from 'react-icons/cg'
import React from 'react'

type ChakraReactTableProps = {
    columns: Array<Column<any>>
    data: Array<any>
    rowCursor?: string
    handleOnRowClick?: (row: Object) => void
    initialStateSortBy?: Array<{ id: string; desc: boolean }>
}

const ChakraReactTable = ({
    columns,
    data,
    rowCursor = undefined,
    handleOnRowClick = undefined,
    initialStateSortBy = [],
}: ChakraReactTableProps) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        rows,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 15,
                sortBy: initialStateSortBy,
            },
        },
        useSortBy,
        usePagination
    )

    return (
        <Stack>
            <Table {...getTableProps()} size="sm" className={'responsiveTable'}>
                <Thead bg="gray.50">
                    {headerGroups.map((headerGroup, index) => (
                        <Tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={`headerGroup${index}`}
                        >
                            {headerGroup.headers.map((column) => (
                                <Th pt={6} key={`column${column.id}`}>
                                    <Flex
                                        align="center"
                                        gridGap={2}
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                    >
                                        {column.render('Header')}
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <CgChevronDown />
                                            ) : (
                                                <CgChevronUp />
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </Flex>
                                    <Box py={2}>
                                        {column.canFilter
                                            ? column.render('Filter')
                                            : null}
                                    </Box>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.length === 0 && (
                        <Td colSpan={100}>
                            <Center p={8}>
                                <Text fontSize={'md'} fontWeight={600}>
                                    No rows to display
                                </Text>
                            </Center>
                        </Td>
                    )}
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr
                                {...row.getRowProps()}
                                key={row.id}
                                cursor={rowCursor}
                                _hover={{ backgroundColor: 'gray.100' }}
                                onClick={() =>
                                    handleOnRowClick
                                        ? handleOnRowClick(row.original)
                                        : undefined
                                }
                            >
                                {row.cells.map((cell, index) => (
                                    <Td
                                        {...cell.getCellProps()}
                                        key={`row${index}`}
                                        className={'pivoted'}
                                    >
                                        {headerGroups.map((headerGroup) => {
                                            return (
                                                <Box
                                                    key={`${JSON.stringify(
                                                        headerGroup
                                                    )}-container`}
                                                >
                                                    {headerGroup.headers.map(
                                                        (column, i) => {
                                                            return cell.column
                                                                .Header ===
                                                                column.Header ? (
                                                                <Box
                                                                    key={`mobile-table-header-${column.Header}-${i}`}
                                                                    className={
                                                                        'tdBefore'
                                                                    }
                                                                >
                                                                    {column.render(
                                                                        'Header'
                                                                    )}
                                                                </Box>
                                                            ) : null
                                                        }
                                                    )}
                                                </Box>
                                            )
                                        })}
                                        {cell.render('Cell')}
                                    </Td>
                                ))}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
            <Stack
                direction="row"
                justify="center"
                align="center"
                wrap="wrap"
                spacing={5}
                px={3}
                pb={2}
            >
                <Box>
                    <Text fontSize="sm">
                        Page <b>{pageIndex + 1}</b> of{' '}
                        <b>{pageOptions.length}</b>
                    </Text>
                </Box>
                <Flex>
                    <IconButton
                        size="sm"
                        disabled={!canPreviousPage}
                        variant="ghost"
                        aria-label="Go to first page"
                        icon={<CgChevronDoubleLeft />}
                        onClick={() => gotoPage(0)}
                    />
                    <IconButton
                        size="sm"
                        disabled={!canPreviousPage}
                        variant="ghost"
                        aria-label="Go back a page"
                        icon={<CgChevronLeft />}
                        onClick={() => previousPage()}
                    />
                    <IconButton
                        size="sm"
                        disabled={!canNextPage}
                        variant="ghost"
                        aria-label="Go to next page"
                        icon={<CgChevronRight />}
                        onClick={() => nextPage()}
                    />
                    <IconButton
                        size="sm"
                        disabled={!canNextPage}
                        variant="ghost"
                        aria-label="Go to last page"
                        icon={<CgChevronDoubleRight />}
                        onClick={() => gotoPage(pageCount - 1)}
                    />
                </Flex>
                <Spacer />

                <Text fontSize="sm" fontStyle="italic" fontWeight={500}>
                    {rows.length} rows
                </Text>
                <Box>
                    <Select
                        size="sm"
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                        {[15, 25, 50, 100].map((pageSize, index) => (
                            <option key={`pageSize${index}`} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Select>
                </Box>
            </Stack>
        </Stack>
    )
}

export default ChakraReactTable
