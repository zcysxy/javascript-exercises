const sumAll = function(int1, int2) {
    if (
        typeof int1 !== 'number' ||
        typeof int2 !== 'number' ||
        int1 < 0 ||
        int2 < 0   
    ) return 'ERROR';

    return (int1 + int2) * (Math.abs(int2 - int1) + 1) / 2;
};

module.exports = sumAll;
