const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
let sum = 0;
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  const values = Object.values(products);
  for (const product of products) {
    if (productName[product]) {
      sum = price * quantity;
    }
  }
  console.log(values);
  return sum;

  // Пиши код выше этой строки
}

calculateTotalPrice("Radar");
