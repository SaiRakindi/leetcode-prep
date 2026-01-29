/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  //Approach 1
  // let sCharHash = {}, tCharHash = {};

  // let sLength = s.length;

  // for (let i = 0; i < sLength; i++) {
  //     if (!(s[i] in sCharHash)) sCharHash[s[i]] = i;

  //     if (!(t[i] in tCharHash)) tCharHash[t[i]] = i;

  //     if (sCharHash[s[i]] !== tCharHash[t[i]]) return false;
  // }

  // return true;

  //Approach 2
  let sArray = Array(256).fill(0),
    tArray = Array(256).fill(0);

  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    if (sArray[s.charCodeAt(i)] !== tArray[t.charCodeAt(i)]) {
      return false;
    }

    sArray[s.charCodeAt(i)] = i + 1;
    tArray[t.charCodeAt(i)] = i + 1;
  }

  return true;
};
