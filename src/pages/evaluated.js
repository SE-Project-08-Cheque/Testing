
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
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import API_Service from '../Services/API_Service';
import { useState } from 'react';






function Evaluated(props) {
    const [firstload, setFirstload] = useState(true);
    const [reqlist, setReqlist] = useState([]);
    const islogged = SessionService.isAuthenticated();
    console.log(islogged);

    if (!islogged) {
        return (
            <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
        );
    }

    const load = () => {
        API_Service.checktoEval((res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                console.log(res.data.data);
                setReqlist(res.data.data)
            }

        });

    }
    const pas = (chid) => {
        var eid=JSON.parse(SessionService.getdata()).user_id;
        API_Service.pas(chid,eid, (res) => {
            load();
        });
    }
    const ret = (chid) => {
        var eid=JSON.parse(SessionService.getdata()).user_id;
        API_Service.ret(chid,eid, (res) => {
            load();
        });
    }

    if (firstload) {
        load();
        setFirstload(false);
    }




    console.log(reqlist);



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

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Cheque ID</TableCell>
                            <TableCell align="right">Sender ID</TableCell>
                            <TableCell align="right">Receiver ID</TableCell>
                            <TableCell align="right">Amount</TableCell>


                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">PASS</TableCell>
                            <TableCell align="right">RETURN</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.map((row) => {
                            if (row.status == "EVALUATING") {
                                return (
                                    <TableRow key={row.cheque_id}>

                                        <TableCell align="right">{row.cheque_id}</TableCell>
                                        <TableCell align="right">{row.sender_id}</TableCell>
                                        <TableCell align="right">{row.receiver_id}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>

                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.note}</TableCell>
                                       
                                        <TableCell align="right"><Button disabled={false} color="green" onClick={() => { pas(row.cheque_id) }} >PASS</Button></TableCell>
                                        <TableCell align="right"><Button disabled={false} color="red" onClick={() => { ret(row.cheque_id) }}>RETURN</Button></TableCell>
                                       
                                        
                                        
                                        



                                    </TableRow>);
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default Evaluated;
