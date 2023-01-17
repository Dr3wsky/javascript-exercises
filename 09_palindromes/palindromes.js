const palindromes = function (str) {
    modifiedStr = str.toLowerCase().split();
    modifiedStr.forEach(element => {
        
        if (modifiedstr.charCodeAt(element) < 65 && charCodeAt(element) > 90) {
            modifiedStr.splice(midifiedStr.indexOf(element, 1));
        }
    });
    reversedStr = modifiedStr.reverse().join('');
    return reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
