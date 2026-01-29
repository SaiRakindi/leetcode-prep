/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  //Doesn't work for all cases
  // let sLength = s.length, mid = Math.floor(s.length/2);

  // let rotatedString = s.substr(mid, sLength) + s.substr(0, mid);

  // return goal === rotatedString;

  //Optimized approach

  let sLength = s.length,
    goalLength = goal.length;

  if (sLength !== goalLength) return false;

  let rotatedString = "";

  for (let i = 0; i < sLength; i++) {
    rotatedString = s.substring(i) + s.substring(0, i);

    if (rotatedString === goal) return true;
  }

  return false;
};
