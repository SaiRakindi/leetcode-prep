/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0,
    tenCount = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) fiveCount++;
    else if (bills[i] === 10) {
      if (fiveCount) {
        tenCount++;
        fiveCount--;
      } else return false;
    } else {
      if (fiveCount && tenCount) {
        tenCount--;
        fiveCount--;
      } else if (fiveCount >= 3) fiveCount -= 3;
      else return false;
    }
  }

  return true;
};
