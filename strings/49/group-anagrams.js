/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //Brute force appraoach with lesser beats
  let result = [];
  let visited = new Set();

  let sortedAnagrams = strs.map((str) => str.split("").sort().join(""));

  for (let i = 0; i < strs.length; i++) {
    if (visited.has(i)) continue;

    let anagram = [];
    anagram.push(strs[i]);
    visited.add(i);

    for (let j = i + 1; j < sortedAnagrams.length; j++) {
      if (sortedAnagrams[i] === sortedAnagrams[j]) {
        anagram.push(strs[j]);
        visited.add(j);
      }
    }

    anagram.sort();
    result.push(anagram);
  }

  return result;
};
