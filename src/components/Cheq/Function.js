function toWords(s=""){
    if(parseInt(s)>10**15){
        return 'Value is too long to display'
    }
    var th = ['','thousand','million', 'billion','trillion'];
    var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return '';
    s=parseFloat(s).toFixed(2);
    var x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15){
        return 'Value is too long to display';
    }
    var n = s.split(''); 
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
      return str+'Only';
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
    }

function format(num){
    num=parseFloat(num);
    if (num !== parseFloat(num)) return '0.00';
    var n =num.toFixed(2);
    return String(n).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    }
export {toWords,format}