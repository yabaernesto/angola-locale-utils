"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrencyAOA = formatCurrencyAOA;
function formatCurrencyAOA(amount, position = 'before') {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const formattedAmount = formatter.format(amount).replace('R$', 'Kz');
    return position === 'before'
        ? `Kz ${formattedAmount.replace('Kz', '').trim()}`
        : `${formattedAmount.replace('Kz', '').trim()} Kz`;
}
