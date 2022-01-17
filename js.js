const price = prompt("Please enter a sum");
console.log(price);

const formatedPrice = Number.parseFloat(price);

const tip = prompt("Please enter a tip");
console.log(tip);

const formatedTip = Number.parseFloat(tip);

const tipAmount = Number((formatedPrice * formatedTip / 100).toFixed(2));

const totalSum = Number((formatedPrice + tipAmount).toFixed(2));

const message = `Your order on sum : 
${formatedPrice},\n 
in there Tips: ${formatedTip}%,\n
from sum Tips equals: ${tipAmount},\n 
and the Total Sum is: ${totalSum}`;
alert(message);