const findTheOldest = function (array) {
    return array.reduce((a, b) => {
        const firstAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return firstAge > nextAge ? a : b;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death-birth;
};

// Do not edit below this line
module.exports = findTheOldest;
