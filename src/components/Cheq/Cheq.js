// import { border } from '@chakra-ui/react';
import React from 'react';
import cheq from './Cheq.module.css';
import {toWords,format} from './Function'

const cheque = (props) => (
  <div data-testid='cheque' className={cheq.check}>
    <div className={cheq.border}>
      <div className={cheq.container}>
      {/* <Cross crosstxt crosstxt={'ONLY SRI LANKA'}/> */}
        <div className={cheq.content}>
          <div className={cheq.one}>
            <div className={cheq.title}>
              <div className={cheq.ownerName}>{props.name}</div>
              <div className={cheq.name}>
                {props.designation}
                <br />{props.company}
                <br />{props.city}
              </div>
            </div>
            <div className={cheq.following}>
              <table className={cheq.table}>
                <tbody>
                  <tr>
                    <td className={cheq.line} >
                      This check is in payment of the following
                    </td>
                  </tr>
                  <tr>
                    <td className={[cheq.empty,cheq.line].join(" ")}>{props.reason1}</td>
                  </tr>
                  <tr>
                    <td className={[cheq.empty,cheq.line].join(" ")}>{props.reason2}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={cheq.date}>{props.date}</div>
          </div>
          <div className={cheq.one}>
            <div className={cheq.title}>
            <div className={cheq.payto}>{props.payto}</div>
          <div className={cheq.orderof}>{toWords(props.amount)} rupees only</div>
 
            </div>
            <div className={cheq.following}>
              
            </div>
            <div className={cheq.adt}>
                <fieldset style={{marginTop:'-15px'}}>
                <legend><div className={cheq.amounttxt}>amount</div></legend>
                    <div style={{fontSize:'12px'}}>LKR</div>
                <div className={cheq.t}>
                    {format(props.amount)}
                </div>
                </fieldset>
                
            </div>
          </div>

          <div className={cheq.three}>
            <div className={cheq.company}>
              <div className={cheq.companyName}>OUR BANK</div>
              <div className={cheq.companyDetails}>
                OUR BANK <br/>
                COMPANY ADDRESS
                <br /> CITY, XIP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default cheque;
    