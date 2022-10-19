import React from "react"
import "./CustomTable.scss"
import { useSelector } from "react-redux"
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import { getHeaders, getTableFormatEmployee } from "../../helpers/layouts/customTable/customTable";
import { matchSorter } from "match-sorter";
import CssBaseline from '@mui/material/CssBaseline'
import MaUTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
    return matchSorter(rows, filterValue, { keys: [(row: any) => row.values[id]] });
}
// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

// Our table component
function Table({ columns, data }: any) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize }
    }: any = useTable(
        {
            columns,
            data,
            globalFilter: '',
            initialState: { pageIndex: 0, pageSize: 10 },
        }, useGlobalFilter, useSortBy, usePagination
    )

    return (
        <div>
            <div className="ctnTopActionsTable">
                <div>
                    <span>Show </span>
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <span> entries</span>
                </div>
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={""}
                    setGlobalFilter={setGlobalFilter}
                />
            </div>

            <MaUTable className="customTable" {...getTableProps()}>

                <TableHead>
                    {headerGroups.map((headerGroup: any) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span className="tableFilterArrows">
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ↓'
                                                : ' ↑'
                                            : '↕'}
                                    </span>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {page.map((row: any, i: any) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </MaUTable>
            <div className="ctnTopActionsTable">
                <div>Showing {pageSize * pageIndex + 1} to {(pageSize * (pageIndex + 1)) < data.length ? (pageSize * (pageIndex + 1)) : data.length} of {data.length} entries</div>
                <div className="pagination">
                    {' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                </div>
            </div>


        </div>
    );
}
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}: any) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce((value: any) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
        </span>
    )
}

export function CustomTable() {
    const employees = useSelector((s: any) => s.employees);
    const data: any = React.useMemo(() => getTableFormatEmployee([...employees]), [])
    const columns: any = React.useMemo(() => getHeaders(), [])
    return (
        <Table columns={columns} data={data}></Table>
    )
}



