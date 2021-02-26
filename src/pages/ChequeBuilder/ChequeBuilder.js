import React, { Component ,useState} from 'react';
import { Redirect } from 'react-router-dom';
import Cheq from '../../components/Cheq/Cheq';
import InputForm from '../../components/Chequeform/Chequeform';
import API_Service from '../../Services/API_Service';
import SessionService from '../../Services/SessionService';
import './ChequeBulider.css';
function ChequeBuilder(props) {
  const [state,setState] =useState({
    cheque: { name: JSON.parse(SessionService.getdata()).full_name+"", 
    designation: 'CUSTOMER', 
    company: 'Sender Acc : '+JSON.parse(SessionService.getdata()).account_no+"",
    city: JSON.parse(SessionService.getdata()).city+"",
    reason1: '', reason2: '', amount: '', payto: '', pay: '', date: new Date().toISOString().slice(0, 10) },
    cross: false,
  });
  const islogged = SessionService.isAuthenticated();
  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  };



  
  var ChangeHandler = (event, t) => {
    const cheque1 = { ...state.cheque };
    cheque1[t] = event.target.value;
    setState({
      cheque: cheque1
    });
  }
  var Submitdata = (event) => {
    event.preventDefault();
    const data = { ...state.cheque };
    var sender_id_= JSON.parse(SessionService.getdata()).user_id+"";
    var acc = data.payto;
    var amount = data.amount;
    var date = data.date;
    var note = data.reason1 + " and for " + data.reason2;
    var datatosend = [sender_id_,acc,amount,date,note];
    API_Service.send_cheque(datatosend,(res)=>{
      console.log(res.success);
      if(res.data.success===true){
        props.history.push('/chequelist')
      }
      else{
        props.history.push('/chequelist')
      }
    });
    console.log(data);
  }
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
      <div className="center" ><Cheq
        name={state.cheque.name}
        designation={state.cheque.designation}
        company={state.cheque.company}
        city={state.cheque.city}
        reason1={state.cheque.reason1}
        reason2={state.cheque.reason2}
        amount={state.cheque.amount}
        payto={state.cheque.payto}
        date={state.cheque.date}
      /></div>
      <InputForm
        change={ChangeHandler}
        reason1={state.cheque.reason1}
        reason2={state.cheque.reason2}
        amount={state.cheque.amount}
        payto={state.cheque.payto}
        date={state.cheque.date}
        submit={Submitdata} />
    </>
  );

}

export default ChequeBuilder;