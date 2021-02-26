import React, { useState } from 'react'

import {
  Center,
} from "@chakra-ui/react"
import API_Service from '../../Services/API_Service';
import SessionService from '../../Services/SessionService';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';

export const Listtable = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [MOCK_DATA, SETMOCK_DATA] = useState([]);
  const [firstload, setFirstload] = useState(true);


  
  if (firstload) {
    API_Service.getallchequesbyid(JSON.parse(SessionService.getdata()).user_id, (res) => {
      console.log(res.data.data);
      SETMOCK_DATA(res.data.data);
      setFirstload(false);
    });
  }

  const COLUMNS = ['Cheque_id', 'Sender_id', 'Receiver_id', 'Evaluator_id', 'Amount', 'Status', 'Date', 'Note']
  const useStyles = makeStyles({
    root: {
      width: '90%',
    },
    container: {
      maxHeight: 400,
    },
    divi:{
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
      height: 700
    },
    
  });
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "darkgrey",
      },
      '&:nth-of-type(even)': {
        backgroundColor: "lightgrey",
      }
    },
  }))(TableRow);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (



    <div className={classes.divi}
    >
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


      <Center>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead  className={classes.head} >
              <StyledTableRow>
                {COLUMNS.map((heads) => { return <TableCell component="th" scope="row">{heads}</TableCell> })}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {MOCK_DATA.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <StyledTableRow key={row.cheque_id}>
                    <StyledTableCell>{row.cheque_id}</StyledTableCell>
                    <StyledTableCell>{row.sender_id}</StyledTableCell>
                    <TableCell>{row.receiver_id}</TableCell>
                    <TableCell>{row.evaluator_id}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.note}</TableCell>
                  </StyledTableRow>);
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={MOCK_DATA.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
        </Paper>
      </Center>

    </div>
  )
}
// export default Listtable;


