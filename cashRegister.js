function checkCashRegister(price, cash, cid) {
  const values = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
  let changeGiven = { status: "OPEN", change: [] };
  let change = cash - price;
  let changeAvailable = 0;
  let delta;

  // determines how much change is available in the drawer
  for (let i in cid) changeAvailable += cid[i][1];

  // closes the till if all of the change is given
  if (changeAvailable === change) {
    changeGiven.status = "CLOSED";
    changeGiven.change = cid;
  	return changeGiven;
  }

  // alerts that there are insufficient funds if there isn't enough change in the drawer
  else if (change < 0) {
  	changeGiven.status = "INSUFFICIENT_FUNDS";
  	return changeGiven;
  }

  // Otherwise the amount of change is determined
  else {
  	cid = cid.reverse();
  	for (let i in values) {
  		if (change - values[i] >= 0) {
  			delta = 0;
  			while (change - values[i] >= 0 && cid[i][1] - values[i] >= 0) {
  				change = Math.round(change * 100 - values[i] * 100) / 100;
  				delta = Math.round(delta * 100 + values[i] * 100) / 100;
  				cid[i][1] = Math.round(cid[i][1] * 100 - values[i] * 100) / 100;
  			}
	        changeAvailable = Math.round(changeAvailable * 100 - delta * 100) / 100;
	  		changeGiven.change.push([cid[i][0], delta]);
  		} 
  	}
  }
  
  if (change > 0) {
  	changeGiven.status = "INSUFFICIENT_FUNDS";
  	changeGiven.change = [];
  	return changeGiven;
  }

  return changeGiven;
}