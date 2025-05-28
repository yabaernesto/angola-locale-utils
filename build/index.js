"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = void 0;
const number_1 = require("./number");
const currency_1 = require("./currency");
const date_1 = require("./date");
exports.locale = {
    formatNumber: number_1.formatNumber,
    formatCurrency: currency_1.formatCurrency,
    formatDate: date_1.formatDate,
};
