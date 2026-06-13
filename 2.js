const products = [
  { name: "Laptop", price: 45000, inStock: true, category: "electronics" },
  { name: "Shirt", price: 1200, inStock: false, category: "clothing" },
  { name: "Phone", price: 25000, inStock: true, category: "electronics" },
  { name: "Shoes", price: 3500, inStock: true, category: "clothing" },
  { name: "Tablet", price: 18000, inStock: false, category: "electronics" },
  { name: "Watch", price: 8000, inStock: true, category: "accessories" },
  { name: "Bag", price: 2200, inStock: true, category: "accessories" },
  { name: "Headphones", price: 3000, inStock: true, category: "electronics" }
];


const filtered = products.filter(
  p => p.inStock && p.price < 10000
);

console.log("Filtered ready product",filtered);


const grouped = filtered.reduce((acc, p) => {
  if (!acc[p.category]) {
    acc[p.category] = [];
  }

  acc[p.category].push(p);
  return acc;
}, {});

console.log("\nGrouped Products:");
console.log(grouped);

const total = filtered.reduce((sum, p) => sum + p.price, 0);

console.log("\nTotal Price:");
console.log(total);