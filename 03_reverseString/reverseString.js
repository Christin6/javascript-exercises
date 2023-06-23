const reverseString = function(string) {
    let stringArr = string.split("");
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        newString += `${stringArr.pop()}`
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
