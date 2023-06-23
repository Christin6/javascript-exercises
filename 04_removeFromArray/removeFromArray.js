const removeFromArray = function(array, ...toRemove) {
    let nArray = array;
    for (let item of toRemove) {
        if (nArray.includes(item)) {
            nArray.splice(nArray.indexOf(item), 1);
        } else {continue}
    }
    return nArray;
};

// Do not edit below this line
module.exports = removeFromArray;
