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
import Sidebar from '../components/Sidebar';


function AllNotifications(props) {
    const [reqlist, setReqlist] = useState([]);
    const [toloaded, setToloaded] = useState(true);
    const islogged = SessionService.isAuthenticated();
    console.log(islogged);

   
    
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const useStyles = makeStyles({
        root: {
          width: '70%',
        },
        container: {
          maxHeight: 400,
        },
        divi:{
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
          height: 650
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
        API_Service.getAllNotificationByID(JSON.parse(SessionService.getdata()).user_id, (res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                console.log(res);
                setReqlist(res.data.data)

            }

        });

    }
    if (toloaded) {
        load();
        setToloaded(false);

    }
    console.log(reqlist);

    var side = JSON.parse(SessionService.getdata()).user_type === "CUSTOMER";

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
                                <TableCell>Notification ID</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Message</TableCell>
                            </StyledTableRow>
                        </TableHead>

                        <TableBody>
                            {reqlist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <StyledTableRow key={row.notification_id}>

                                    <TableCell align="right">{row.notification_id}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.message}</TableCell>


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>{side?<Button style={{background:"darkblue",color:"white",fontSize:10,width:60,height:40}}onClick={()=>{props.history.push('/home')}}>GO BACK</Button>
                :<></>}
                <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={reqlist.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /></Paper>
      
      </Center>
      
      

            </div>
    );
}

export default AllNotifications;
