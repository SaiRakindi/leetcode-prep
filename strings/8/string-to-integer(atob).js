/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let index = 0,
    sLength = s.length;
  (result = 0), (sign = 1);

  // Skip whitespaces
  while (index < sLength && s[index] === " ") index++;

  if (index === sLength) return 0;

  //Check for + or - sign
  if (s[index] === "-" || s[index] === "+") {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  // Parse digits
  while (index < sLength && s[index] >= "0" && s[index] <= "9") {
    result = result * 10 + (s[index].charCodeAt(0) - "0".charCodeAt(0));

    if (result * sign > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (result * sign < -(2 ** 31)) return -(2 ** 31);

    index++;
  }

  return result * sign;
};
