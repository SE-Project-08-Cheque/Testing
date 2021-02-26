import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Center,
    Button,
} from '@chakra-ui/react';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';
import API_Service from '../Services/API_Service';


function AllCustomers(props) {
    const [reqlist, setReqlist] = useState([]);
    const [firstload, setFirstload] = useState(true);
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



    if (!islogged) {
        return (
            <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
        );
    }

    const load = () => {
        API_Service.getAllDataCustomerTable((res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                setReqlist(res.data.data)

            }

        });

    }
    if(firstload){
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
                            <TableCell>Customer ID</TableCell>
                            <TableCell align="right">Account No</TableCell>
                            <TableCell align="right">NIC</TableCell>
                            <TableCell align="right">Full Name</TableCell>
                            <TableCell align="right">City</TableCell>


                            <TableCell align="right">Postal Code</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">Created Date</TableCell>
                            <TableCell align="right">Contact</TableCell>

                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <StyledTableRow key={row.customer_id}>

                                <TableCell align="right">{row.customer_id}</TableCell>
                                <TableCell align="right">{row.account_no}</TableCell>
                                <TableCell align="right">{row.NIC}</TableCell>
                                <TableCell align="right">{row.full_name}</TableCell>

                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.postal_code}</TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.dob}</TableCell>
                                <TableCell align="right">{row.created_date}</TableCell>
                                <TableCell align="right">{row.contact_primary}</TableCell>


                            </StyledTableRow>
                        ))}
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

export default AllCustomers;
