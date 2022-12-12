const removeFromArray = function (...args) {
    const given = args[0];
    const removed = [];
    given.forEach((item) => {
        if (!args.includes(item)) {
            removed.push(item);
        };
    });
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
