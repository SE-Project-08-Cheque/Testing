import React, { useMemo, useState } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
//import MOCK_DATA from './MOCK_DATA.json'
import { format } from 'date-fns';
// import {COLUMNS} from './columns'
// import { MdBuild , MdCall } from "react-icons/md"
import { ArrowRightIcon, ArrowLeftIcon, AddIcon } from '@chakra-ui/icons'
import './table.css'
import { GlobalFilter } from '../Cheq/GlobalFilter'
import {
  Icon,
  Box,
} from "@chakra-ui/react"
import API_Service from '../../Services/API_Service';
import SessionService from '../../Services/SessionService';

export const Listtable = (props) => {
  const [MOCK_DATA, SETMOCK_DATA] = useState([]);
  const [firstload, setFirstload] = useState(true);
  if (firstload) {
    API_Service.getallchequesbyid(JSON.parse(SessionService.getdata()).user_id, (res) => {
      console.log(res.data.data);
      SETMOCK_DATA(res.data.data);
      setFirstload(false);
    });
  }

  const COLUMNS = [
    {
      Header: 'Cheque_id',
      Footer: 'Cheque_id',
      accessor: 'Cheque_id'
    },
    {
      Header: 'Sender_id',
      Footer: 'Sender_id',
      accessor: 'Sender_id'
    },
    {
      Header: 'Receiver_id',
      Footer: 'Receiver_id',
      accessor: 'Receiver_id'
    },
    {
      Footer: 'Evaluator_id',
      Header: 'Evaluator_id',
      accessor: 'Evaluator_id',
    },
    {
      Header: 'Amount',
      Footer: 'Amount',
      accessor: 'Amount',
    },
    {
      Header: 'Status',
      Footer: 'Status',
      accessor: 'Status',
      // cell:<IconButton aria-label="Search database" icon={<SearchIcon />} />
    },
    {
      Header: 'Date',
      Footer: 'Date',
      accessor: 'Date',
      // cell:<IconButton aria-label="Search database" icon={<SearchIcon />} />
    },
    {
      Header: 'Note',
      Footer: 'Note',
      accessor: 'Note',
      // cell:<IconButton aria-label="Search database" icon={<SearchIcon />} />
    }
  ]


  const columns = useMemo(() => COLUMNS, [])
  const data = MOCK_DATA

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    // rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    prepareRow,
    // state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

  const { globalFilter, pageIndex, pageSize } = state
  //   const {pageIndex} = state

  return (



    <>
      <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
          <img src="" alt="Sample" style={{ height: `80px` }} />
          <div className="e-card-stacked">
            <div className="e-card-header">
              <div className="e-card-header-caption">
              </div>
            </div>
            <div className="e-card-content">
            </div>
          </div>
        </div>
      </div>
      {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      { column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? '<' : '>') : ''}</span>
                    </th>
                  ))}

              </tr>
            ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            data.map((row)=>{
              return(
              <tr>
                <td>{row.cheque_id}</td>
                <td>{row.sender_id}</td>
                <td>{row.receiver_id}</td>
                <td>{row.evaluator_id}</td>
                <td>{row.amount}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
                <td>{row.note}</td>
              </tr>);
            })
          }
        </tbody>
      </table>
      <div w={[300, 400, 560]} style={{ margin: "auto", textAlign: "right" }}>
        <Box bg="#ffffff" w={[300, 400, 200]} p={2} color="black" border="1px" borderColor="gray.200" borderRadius="10px">
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>{[10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>Show {pageSize}</option>
          ))}</select>
          <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
        </Box>
      </div>

      <div style={{ margin: "auto", textAlign: "center" }}>
        <Box bg="#ffffff" mx="auto" w={[250, 400, 300]} p={2} color="black" border="1px" borderColor="gray.200">

          <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev<Icon as={ArrowLeftIcon} w={8} h={8} m={4} color="#4CAF50" /></button>
          <button onClick={() => nextPage()} disabled={!canNextPage}><Icon as={ArrowRightIcon} w={8} h={8} m={4} color="#4CAF50" />Next</button>
        </Box>
      </div>
    </>
  )
}
// export default Listtable;


