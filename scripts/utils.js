export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function decimalToFraction(decimal) {
    let fraction = decimal % 1;
    let whole = Math.floor(decimal - fraction);

    const fractions = [
        { limit: 0.1, value: "" },
        { limit: 0.2, value: "1/8" },
        { limit: 0.3, value: "1/4" },
        { limit: 0.36, value: "1/3" },
        { limit: 0.4, value: "3/8" },
        { limit: 0.6, value: "1/2" },
        { limit: 0.63, value: "5/8" },
        { limit: 0.7, value: "2/3" },
        { limit: 0.8, value: "3/4" },
        { limit: 0.9, value: "7/8" }
    ];

    let fractionPart = fractions.find(f => fraction < f.limit)?.value || "";
    return fractionPart ? (whole ? `${whole} ${fractionPart}`.trim() : fractionPart) : whole.toString();
}