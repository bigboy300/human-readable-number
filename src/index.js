module.exports = function toReadable(number) {
    const a = [
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
    const b = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const c = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const d = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];
    const str = String(number);

    if (str.length === 1) {
        return a[number];
    } else if (str.length === 2 && str[0] === "1") {
        return b[number - 10];
    } else if (str.length === 2 && str[1] === "0") {
        return c[str[0] - 2];
    } else if (str.length === 2 && str[0] > "1") {
        return c[str[0] - 2] + ` ${a[str[1]]}`;
    } else if (str.length === 3 && str[1] === "0" && str[2] === "0") {
        return d[str[0] - 1];
    } else if (str.length === 3 && str[2] !== "0" && str[1] === "0") {
        return d[str[0] - 1] + ` ${a[str[2]]}`;
    } else if (str.length === 3 && str[1] === "1") {
        return d[str[0] - 1] + ` ${b[str[2]]}`;
    } else if (str.length === 3 && str[1] > "1" && str[2] === "0") {
        return d[str[0] - 1] + ` ${c[str[1] - 2]}`;
    } else if (str.length === 3) {
        return d[str[0] - 1] + ` ${c[str[1] - 2]}` + ` ${a[str[2]]}`;
    }
};
