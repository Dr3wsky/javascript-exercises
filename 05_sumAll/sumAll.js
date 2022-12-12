const sumAll = function (min, max) {
    let sumTotal = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    };

    for (let i = min; i <= max; i++) {
        sumTotal += i;
    };
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
