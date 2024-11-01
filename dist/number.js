"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumberAO = formatNumberAO;
function formatNumberAO(value, decimalPlaces = 2) {
    const roundedValue = value.toFixed(decimalPlaces);
    const [integerPart, decimalPart] = roundedValue.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return decimalPart
        ? `${formattedIntegerPart},${decimalPart}`
        : formattedIntegerPart;
}