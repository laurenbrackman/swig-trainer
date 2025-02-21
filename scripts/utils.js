export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function decimalToFraction(decimal, tolerance = 1.0E-6) {
    if (decimal % 1 === 0) return decimal.toString(); // Return whole numbers as-is

    let numerator = 1, denominator = 1;
    let fraction = numerator / denominator;

    while (Math.abs(fraction - decimal) > tolerance) {
        if (fraction < decimal) {
            numerator++;
        } else {
            denominator++;
            numerator = Math.round(decimal * denominator);
        }
        fraction = numerator / denominator;
    }

    let wholePart = Math.floor(numerator / denominator);
    let remainder = numerator % denominator;

    if (wholePart > 0 && remainder > 0) {
        return `${wholePart} ${remainder}/${denominator}`; // Mixed number
    } else if (wholePart > 0) {
        return `${wholePart}`; // Whole number
    } else {
        return `${numerator}/${denominator}`; // Simple fraction
    }
}