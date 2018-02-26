module.exports = function longestConsecutiveLength(array) {
    var obj = {};
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        obj[value] = true;
        if (value > max) max = value;
    }
    var longest = 0;
    var accumulator = 0;
    for (let i = 1; i <= max; i++) {
        obj[i] === undefined ? accumulator = 0 : accumulator++;
        if (accumulator > longest) longest = accumulator;
    }
    return longest;
}
