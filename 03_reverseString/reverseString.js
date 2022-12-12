const reverseString = function (string) {
    const reversedString = [];
    let i = 0;
    while (i<=string.length) {
        reversedString[i] = string.charAt(string.length-i);
        i++;
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
