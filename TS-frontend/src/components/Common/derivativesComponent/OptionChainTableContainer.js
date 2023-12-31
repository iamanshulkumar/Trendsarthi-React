import React, { Fragment } from "react"
import PropTypes from "prop-types"
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table"
import { Table, Row, Col, Button } from "reactstrap"
import JobListGlobalFilter from "../GlobalSearchFilter"
import { Link } from "react-router-dom"

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isJobListGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <React.Fragment>
      <Col xxl={3} lg={6}>
        <input type="search" className="form-control" id="search-bar-0" value={value || ""} placeholder={`${count} records...`} onChange={e => { setValue(e.target.value); onChange(e.target.value) }} />
      </Col>
      {isJobListGlobalFilter && <JobListGlobalFilter setGlobalFilter={setGlobalFilter} />}
    </React.Fragment>
  )
}
const customStrikePriceClass = 'customStrikePriceClass-bg';

const OptionChainTableContainer = ({
  columns,
  data,
  isGlobalFilter,
  isJobListGlobalFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  customPageSizeOptions,
  iscustomPageSizeOptions,
  isPagination,
  isShowingPageLength,
  paginationDiv,
  pagination,
  tableClass,
  tbodyClass,
  theadClass
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // defaultColumn: { Filter: DefaultColumnFi lter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        // sortBy: [
        //   {
        //     id: 'sr',
        //     desc: false,
        //   },
        //   {
        //     id: 'openIntCE',
        //     desc: false,
        //   },
        // ],
      },
    },
    useGlobalFilter,
    // useFilters,
    useSortBy,
    useExpanded,
    usePagination
  )

  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
  }

  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value))
  }

  // Calculate the total sums for "Open Int. CE" and "Open Int. PE" columns.
  const totalOpenIntCE = data.reduce((sum, item) => sum + parseFloat(item.openIntCE), 0);
  const totalOpenIntPE = data.reduce((sum, item) => sum + parseFloat(item.openIntPE), 0);
  const totalQtyTradedCE = data.reduce((sum, item) => sum + parseFloat(item.totalQtyTradedCE), 0);
  const totalQtyTradedPE = data.reduce((sum, item) => sum + parseFloat(item.totalQtyTradedPE), 0);

  // Calculate the total sums for "Open Interest Change CE" and "Open Interest Change PE" columns.
  const totalOpenInterestChangeCE = data.reduce((sum, item) => sum + parseFloat(item.openInterestChangeCE), 0);
  const totalOpenInterestChangePE = data.reduce((sum, item) => sum + parseFloat(item.openInterestChangePE), 0);


  return (
    <Fragment>
      <Row className="mb-2">
        {iscustomPageSizeOptions &&
          <Col md={customPageSizeOptions ? 2 : 1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        }

        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isJobListGlobalFilter={isJobListGlobalFilter}
          />
        )}
        {isAddOptions && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7" xxl="8">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <div className="table-responsive">
        <Table {...getTableProps()} className={` ${tableClass} bdr`}>
          <thead className={theadClass}>
            <tr>
              <th colSpan={6} className="text-white fw-bold">Call Option <i className="bx bxs-up-arrow text-success"></i></th> 
              <th colSpan={6} className="text-end text-white fw-bold"><i className="bx bxs-down-arrow text-danger me-1"></i> Put Option</th> 
            </tr>
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th key={column.id} className={`${column.isSort ? "sorting" : ""
                    } text-white text-uppercase text-center align-middle ${
                    column.id === 'strikePrice' ? customStrikePriceClass : ''}`}>
                    <div className="m-0" {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className={` ${tbodyClass} `}>
            {page.map(row => {
              prepareRow(row)
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map(cell => {

                      // Check if the column corresponds to "Strike Price"
                      const isStrikePriceColumn = cell.column.id === 'strikePrice';

                      return (
                        <td key={cell.id} {...cell.getCellProps()}
                        className={`text-center align-middle ${isStrikePriceColumn ? 'custom-strike-price' : ''}`}
                        >
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                </Fragment>
              )
            })}
          </tbody>

          {/* Display the total sums row in the table footer */}
          <tfoot>
            <tr>
              <td className="text-center align-middle">{/* Add other total sums here */}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalOpenIntCE}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalOpenInterestChangeCE}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalQtyTradedCE}</td>
              <td className="text-center align-middle">{/* Add other total sums here */}</td>
              <td className="text-center align-middle">{/* Add other total sums here */}</td>
              <td className="fw-bold bg-warning text-black text-center align-middle ">TOTAL</td>
              <td className="text-center align-middle">{/* Add other total sums here */}</td>
              <td className="text-center align-middle">{/* Add other total sums here */}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalQtyTradedPE}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalOpenInterestChangePE}</td>
              <td className="fw-bold text-warning text-center align-middle">{totalOpenIntPE}</td>
            </tr>
          </tfoot>
        </Table>
      </div>

      {
        isPagination && (
          <Row className="justify-content-between align-items-center">
            {isShowingPageLength && <div className="col-sm">
              <div className="text-muted">Showing <span className="fw-semibold">{page.length}</span> of <span className="fw-semibold">{data.length}</span> entries</div>
            </div>}
            <div className={paginationDiv}>
              <ul className={pagination}>
                <li className={`page-item ${!canPreviousPage ? "disabled" : ''}`}>
                  <Link to="#" className="page-link" onClick={previousPage}>
                    <i className="mdi mdi-chevron-left"></i>
                  </Link>
                </li>
                {pageOptions.map((item, key) => (
                  <React.Fragment key={key}>
                    <li className={pageIndex === item ? "page-item active" : "page-item"}>
                      <Link to="#" className="page-link" onClick={() => gotoPage(item)}>{item + 1}</Link>
                    </li>
                  </React.Fragment>
                ))}
                <li className={`page-item ${!canNextPage ? "disabled" : ''}`}>
                  <Link to="#" className="page-link" onClick={nextPage}>
                    <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Row>
        )
      }
    </Fragment>
  )
}

OptionChainTableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default OptionChainTableContainer
