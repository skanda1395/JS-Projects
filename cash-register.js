function checkCashRegister(price, cash, cid) {
  let total_cid = cid.reduce((acc, [,val]) => acc + val, 0);
  let due = cash - price;
  let chn_arr = [];
  
  if (total_cid == due) 
    return ({status: "CLOSED", change: cid});
  else if (total_cid < due || !change(due))
    return ({status: "INSUFFICIENT_FUNDS", change: []});
  else
    return ({status: "OPEN", change: chn_arr});
    
  function change(due) {
    
    let denom = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let rem, n;
    
    for (let i = denom.length - 1; i >= 0; i--, n = 0) {
      if ((rem = Math.floor(due / denom[i])))  {
        while (cid[i][1] && rem) {
          cid[i][1] -= denom[i];
          due = (due * 1000 - denom[i] * 1000) / 1000;
          rem--, n++;
        }
        if (n) chn_arr.push([cid[i][0], denom[i] * n]);
      }
    }
    
    return (due)? false: true;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
