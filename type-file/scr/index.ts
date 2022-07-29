const calculateFunction = (price: number):number => {
    return +(price + (price * 0.18)).toFixed(1);
}

let total_price = calculateFunction(1567);
let discount = total_price / 2;
console.log(discount)