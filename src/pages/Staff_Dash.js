import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    MenuItem,
    VStack,
    Code,
    Grid,
    theme,
    Center,
    Flex,
    Image,
    AlertDialog,
    ReactRouterLink,
    Stack,
    Checkbox,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Spinner,
    Tooltip,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Alert from '../components/Alert';
import {
    ArrowRightIcon,
    CheckCircleIcon,
    EmailIcon,
    PhoneIcon,
    StarIcon,
} from '@chakra-ui/icons';
import '../components/MainSection.css';
import Footer from '../components/Footer';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Staff_Dash(props) {
    const islogged = SessionService.isAuthenticated();
    console.log(islogged);

    if (!islogged) {
        return (
            <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
        );
    }
    var data = SessionService.getdata();
    console.log("1555");
    var user = JSON.parse(data);
    console.log(user);

  
    return (
        <div style={{ height: `500px` }}>




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



            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                        <div className="e-card-header-caption">
                               <Button onClick={()=>{props.history.push('/Approve')}}>Approve</Button>
                            </div>
                        </div>
                        <div className="e-card-content">
                            Approve_or_Reject_userAccounts
                </div>
                    </div>
                </div>
            </div>



            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                               <Button onClick={()=>{props.history.push('/StaffReg')}}>Staff Register</Button>
                            </div>
                        </div>
                        <div className="e-card-content">
                            This Link will get you into staff register
                </div>
                    </div>
                </div>
            </div>
            
            
            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                               <Button onClick={()=>{props.history.push('/AllNotifications')}}>My Notifications</Button>
                            </div>
                        </div>
                        <div className="e-card-content">
                            See Notifications
                </div>
                    </div>
                </div>
            </div>
            
            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                               <Button onClick={()=>{props.history.push('/eval')}}>Do Evaluation</Button>
                            </div>
                        </div>
                        <div className="e-card-content">
                            Evaluate
                </div>
                    </div>
                </div>
            </div>
            

            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                            <Button onClick={()=>{props.history.push('/AllCustomers')}}>All Customers</Button>
                            </div>
                        </div>
                        <div className="e-card-content">
                            Get All Customers
                </div>
                    </div>
                </div>
            </div>


            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="https://www.freevector.com/uploads/vector/preview/499/FreeVector-Speed-Meter-1.jpg" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                            <Button onClick={()=>{props.history.push('/evaledbyme')}}>My Evals</Button>
                            
                            </div>
                        </div>
                        <div className="e-card-content">
                            Evaled by me
                </div>
                    </div>
                </div>
            </div>


            

        </div>




    );
}

export default Staff_Dash;
