const palindromes = function(str) {
    str = str.toLowerCase();
    let cleanedStr = [];
    let reversedStr = [];
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) > 91) {
            cleanedStr.push(str[i]);
            reversedStr.unshift(str[i]);
        };
    };
    return cleanedStr.join('') === reversedStr.join('');
};

// Do not edit below this line
module.exports = palindromes;
