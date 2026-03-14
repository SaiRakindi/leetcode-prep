/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let index = 0;
  let intervalsLength = intervals.length;

  while (index < intervalsLength && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index]);
    index++;
  }

  while (index < intervalsLength && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[index][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[index][1], newInterval[1]);

    index++;
  }
  result.push(newInterval);

  while (index < intervalsLength) {
    result.push(intervals[index]);
    index++;
  }

  return result;
};
