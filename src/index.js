module.exports = function toReadable(s) {
    const dg = [
        "",
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
    const tn = [
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
    const tw = [
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = s.toString();
    if (str.length == 1) {
        return str[0] == "0" ? "zero" : dg[s];
    } else if (str.length == 2) {
        return (
            (str[0] != "0" && str[0] != "1" ? "" + tw[+str[0] - 1] : "") +
            (str[0] == "1" ? tn[str[1]] : "") +
            (str[1] != "0" && str[0] != "1" ? " " + dg[str[1]] : "")
        );
    } else if (str.length == 3) {
        return (
            dg[str[0]] +
            " " +
            "hundred" +
            (str[1] != "0" && str[1] != "1" ? " " + tw[+str[1] - 1] : "") +
            (str[1] == "1" ? " " + tn[str[2]] : "") +
            (str[2] != "0" && str[1] != "1" ? " " + dg[str[2]] : "")
        );
    }
};
