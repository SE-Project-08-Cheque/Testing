import React,{ useState } from 'react';
import {
  Center,

    Button,
} from '@chakra-ui/react';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';
import API_Service from '../Services/API_Service';








function Getpaid(props) {
    const [firstload, setFirstload] = useState(true);
    const [reqlist, setReqlist] = useState([]);
    const islogged = SessionService.isAuthenticated();
    console.log(islogged);


    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const useStyles = makeStyles({
        root: {
          width: '90%',
        },
        container: {
          maxHeight: 400,
        },
        divi:{
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1566850292484-3fde9b385345?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
          height: 700
        },
        
      });


      const classes = useStyles();


    // if (!islogged) {
    //     return (
    //         <Redirect
    //             to={{ pathname: '/', state: { from: props.location } }}
    //         />
    //     );
    // }

    const load = () => {
        API_Service.getAllgetReceivedCheque(JSON.parse(SessionService.getdata()).user_id, (res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                setReqlist(res.data.data)
            }

        });

    }
    const getpaid = (chid) => {
        API_Service.getpaid(chid, (res) => {
            load();
        });
    }
    const refund = (chid) => {
        API_Service.refund(chid, (res) => {
            load();
        });
    }

    if (firstload) {
        load();
        setFirstload(false);
    }




    console.log(reqlist);

    
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
                            <TableCell align="right">Amount</TableCell>


                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            if (row.status == "PENDING") {
                                return (
                                    <StyledTableRow key={row.cheque_id}>

                                        <TableCell align="right">{row.cheque_id}</TableCell>
                                        <TableCell align="right">{row.sender_id}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>

                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.note}</TableCell>
                                        {                                      
                                        
                                        
                                        (+new Date(row.date)<=+new Date())?<div>
                                            <TableCell align="right"><Button color="green" onClick={() => { getpaid(row.cheque_id) }} >Get Paid</Button></TableCell>
                                            <TableCell align="right"><Button color="red" onClick={() => { refund(row.cheque_id) }}>Refund</Button></TableCell>
                                        </div>:<div>
                                        <TableCell align="right"><Button disabled={true} color="green" onClick={() => { getpaid(row.cheque_id) }} >Get Paid</Button></TableCell>
                                        <TableCell align="right"><Button disabled={true} color="red" onClick={() => { refund(row.cheque_id) }}>Refund</Button></TableCell>
                                        </div>
                                        
                                        
                                        }
                                        



                                    </StyledTableRow>);
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={reqlist.length}
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

export default Getpaid;
