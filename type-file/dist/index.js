"use strict";
const calculateFunction = (price) => {
    return +(price + (price * 0.18)).toFixed(1);
};
let total_price = calculateFunction(1567);
let discount = total_price / 2;
console.log(discount);
