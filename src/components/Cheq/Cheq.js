// import { border } from '@chakra-ui/react';
import React from 'react';
import cheq from './Cheq.module.css';
// import Cross from './ChequeParts/ChequeParts';
var th = ['','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
 var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
 var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

 function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g,'');
  if (s != parseFloat(s)) return '';
  s=parseFloat(s).toFixed(2);
  var x = s.indexOf('.');
  if (x == -1)
      x = s.length;
  if (x > 15)
      return 'too big';
  var n = s.split(''); 
  console.log(n)
  var str = '';
  var sk = 0;
  for (var i=0;   i < x;  i++) {
      if ((x-i)%3==2) { 
          if (n[i] == '1') {
              str += tn[Number(n[i+1])] + ' ';
              i++;
              sk=1;
          } else if (n[i]!=0) {
              str += tw[n[i]-2] + ' ';
              sk=1;
          }
      } else if (n[i]!=0) { // 0235
          str += dg[n[i]] +' ';
          if ((x-i)%3==0) str += 'hundred ';
          sk=1;
      }
      if ((x-i)%3==1) {
          if (sk)
              str += th[(x-i-1)/3] + ' ';
          sk=0;
      }
  }
  str= str.trim()+' Rupees '
  if (x != s.length) {
  n=n.slice(x+1,n.length);
  var m = [...new Set(n)];
  if((m.length==1 && m.includes("0")) || m.length==0){
    console.log(str)
    return str+' Only';
  }
  x=n.length;
  for (var i=0;   i < x;  i++) {
    if ((x-i)%3==2 || x==1) { 
        if (n[i] == '1') {
            str += tn[Number(n[i+1])] + ' ';
            i++;
            sk=1;
        } else if (n[i]!=0) {
            str += tw[n[i]-2] + ' ';
            sk=1;
        }
    } else if (n[i]!=0) {
        str += dg[n[i]] +' ';
        sk=1;
    }
}
str=str+'Cents Only'
}
else{
str=str+'Only'
}
  return str;
}const format = num => {
  num=parseFloat(num);
  if (num !== parseFloat(num)) return '0.00';
  var n =num.toFixed(2);
  return String(n).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
}
const cheque = (props) => (
  <div className={cheq.check}>
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
    