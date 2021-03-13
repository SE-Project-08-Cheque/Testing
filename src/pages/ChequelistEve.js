import React, { useMemo, useState } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { format } from 'date-fns'; import { ArrowRightIcon, ArrowLeftIcon, AddIcon } from '@chakra-ui/icons'
// import '../../components/Chequelist/table.css'
import {
  Icon,
  Text,
  Box,
  Center,
} from "@chakra-ui/react"
import { Redirect } from 'react-router-dom';
import API_Service from '../Services/API_Service';
import SessionService from '../Services/SessionService';
import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';

function Evaledbyme(props) {const [MOCK_DATA, SETMOCK_DATA] = useState([]);
  const [firstload, setFirstload] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const islogged = SessionService.isAuthenticated();
  
  const useStyles = makeStyles({
    root: {
      width: '90%',
    },
    container: {
      maxHeight: 400,
    },
    divi: {
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1566850292484-3fde9b385345?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 700
    },

  });


  const classes = useStyles();

  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  };

  if (firstload) {
    API_Service.getallchequesbysid(JSON.parse(SessionService.getdata()).user_id, (res) => {
      console.log(res.data.data);
      SETMOCK_DATA(res.data.data);
      setFirstload(false);
    });
  }

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


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.divi}>

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
              <TableHead className={classes.head}>
                <StyledTableRow>
                  <TableCell align="right">Cheque ID</TableCell>
                  <TableCell align="right">Sender ID</TableCell>
                  <TableCell align="right">Receiver ID</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Status</TableCell>


                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Note</TableCell>

                </StyledTableRow>
              </TableHead>

              <TableBody>
                {MOCK_DATA.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return(<StyledTableRow key={row.cheque_id}>

                    <TableCell align="right">{row.cheque_id}</TableCell>
                    <TableCell align="right">{row.sender_id}</TableCell>
                    <TableCell align="right">{row.receiver_id}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>

                    <TableCell align="right">{row.status}</TableCell>

                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.note}</TableCell>

                  </StyledTableRow>);
                })}
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
  );
}
export default Evaledbyme;