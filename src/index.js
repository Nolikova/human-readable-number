module.exports = function toReadable(number) {
    switch (number.toString().length) {
        case 1:
            return getOne(number);
        case 2:
            return getTwo(number);
        case 3:
        default:
            return getThree(number);
    }
};

const single = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const double = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
};

function getOne(num) {
    return single[num];
}

function getTwo(num) {
    if (+num < 10) return getOne(+num);

    const n = String(num);
    if (Object.keys(double).some((key) => key === n)) return double[n];

    const n1 = n.slice(0, 1);
    const n2 = n.slice(1);

    if (+num < 20) {
        const nW = getOne(n2);
        return /t$/.test(nW) ? `${nW}een` : `${nW}teen`;
    }

    if (n2 == 0) {
        const nW = getOne(n1);
        return /t$/.test(nW) ? `${nW}y` : `${nW}ty`;
    }

    return `${getTwo(+n1 * 10)} ${getOne(n2)}`;
}

function getThree(number) {
    if (/00$/.test(number)) {
        return `${getOne(String(number).slice(0, 1))} hundred`;
    }

    return `${getOne(String(number).slice(0, 1))} hundred ${getTwo(
        String(number).slice(1)
    )}`;
}
