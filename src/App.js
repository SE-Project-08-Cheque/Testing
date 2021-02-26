import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import SessionService from './Services/SessionService';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Contact_Details from './pages/Contact_Details';
import Account_Details from './pages/Account_Details';
import Staff_Dash from './pages/Staff_Dash';
import StaffReg from './pages/signupstaff';
import Approve from './pages/approve';
import AllCustomers from './pages/allcustomers';
import FogotPin from './pages/FogotPin';
import AllNotifications from './pages/allnotifications';
import ChequeBuilder from './pages/ChequeBuilder/ChequeBuilder';
import ListBuilder from './pages/senderviewsentcheques/Chequelist';
import Getpaid from './pages/getpaid';
import Evaluated from './pages/evaluated';
import Evaledbyme from './pages/evalcheque/Chequelist';
import Admin_Dashboard from './pages/admin_dash';

function App(props) {
  SessionService.clearSession();
 //sSessionService.initSession({"A":123});
  

  return (
    <Router>
      <ChakraProvider>
        <Navbar heading='onlineCheque'/>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/eval" exact component={Evaluated} />
          <Route path="/evaledbyme" exact component={Evaledbyme} />
          <Route path="/getpaid" exact component={Getpaid} />
          <Route path="/chequelist" exact component={ListBuilder} />
          <Route path="/chequebuilder" exact component={ChequeBuilder} />
          <Route path="/AllNotifications" exact component={AllNotifications} />        
          <Route path="/FogotPin" exact component={FogotPin} />   
          <Route path="/Staff_Dashboard" component={Admin_Dashboard} />
          <Route path="/AllCustomers" component={AllCustomers} />
          <Route path="/Approve" component={Approve} />
          <Route path="/StaffReg" component={StaffReg} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/home" exact component={Dashboard} />
          <Route path="/dashboard" component={Home} />
          <Route path="/Account_Details" component={Account_Details} />
          <Route path="/Contact_Details" component={Contact_Details} />
          <Redirect from='/*' to="/welcome" />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
