/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // Bruteforce approach - TC: O(3N), SC: O(2N)

    // let ratingsLength = ratings.length;

    // // let left = Array(ratingsLength).fill(1);
    // // let right = Array(ratingsLength).fill(1);
    // let left = [], right = [];

    // left[0] = 1, right[ratingsLength - 1] = 1;

    // for (let i = 1; i < ratingsLength; i++) {
    //     if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
    //     else left[i] = 1;
    // }

    // for (let i = ratingsLength - 2; i >= 0; i--) {
    //     if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
    //     else right[i] = 1;
    // }

    // let sum = 0;
    // for (let i = 0; i < ratingsLength; i++) {
    //     sum += Math.max(left[i], right[i]);
    // }

    // return sum;

    //Optimal approach
    let sum = 1, index = 1, ratingsLength = ratings.length;

    while (index < ratingsLength) {
        if (ratings[index] === ratings[index - 1]) {
            sum += 1;
            index++;
            continue;
        }

        let peak = 1;
        while (index < ratingsLength && ratings[index] > ratings[index - 1]) {
            peak++;
            sum += peak;
            index++;
        }

        let down = 1;
        while (index < ratingsLength && ratings[index] < ratings[index - 1]) {
            sum += down;
            index++;
            down++;
        }

        if (down > peak) sum+= down - peak;
    }

    return sum;

};