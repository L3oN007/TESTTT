export function convertCurrency(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid Number';
    }

    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else {
        return (number / 1000000).toFixed(1) + 'M';
    }
}