module.exports = function longestConsecutiveLength(array) {
    let obj ={};
    for (let i=0; i<array.length; i++) {
        obj[array[i]] = true;
    }
    let longest1 = 0;
    let longest2 = 0;
    for (let i=1; i<=array.length+1; i++) {
        if (!obj[i]) {
            if (longest2 > longest1) longest1 = longest2;
            longest2 = 0;
        } else {
            longest2++;
        }
    }
    return longest1;
}
