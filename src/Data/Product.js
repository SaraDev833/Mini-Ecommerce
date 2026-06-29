const products = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 25.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 5,
    name: "Keyboard",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },

  // Fashion
  {
    id: 6,
    name: "T-Shirt",
    price: 15.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 7,
    name: "Jeans",
    price: 45.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  },
  {
    id: 8,
    name: "Sneakers",
    price: 89.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Jacket",
    price: 120,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 10,
    name: "Cap",
    price: 10.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },

  // Home & Kitchen
  {
    id: 11,
    name: "Non-stick Pan",
    price: 29.99,
    category: "Home and Kitchen",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff",
  },
  {
    id: 12,
    name: "Knife Set",
    price: 49.99,
    category: "Home and Kitchen",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
  },
  {
    id: 13,
    name: "Blender",
    price: 59.99,
    category: "Home and Kitchen",
    image: "https://plus.unsplash.com/premium_photo-1663853294058-3f85f18a4bed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Dinner Set",
    price: 39.99,
    category: "Home and Kitchen",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 15,
    name: "Kettle",
    price: 19.99,
    category: "Home and Kitchen",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
  },

  // Beauty
  {
    id: 16,
    name: "Face Cream",
    price: 12.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 17,
    name: "Lipstick",
    price: 9.99,
    category: "Beauty",
    image: "https://plus.unsplash.com/premium_photo-1677526496932-1b4bddeee554?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Perfume",
    price: 25.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
  },
  {
    id: 19,
    name: "Shampoo",
    price: 8.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  },
  {
    id: 20,
    name: "Makeup Kit",
    price: 35.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },

  // Sports
  {
    id: 21,
    name: "Football",
    price: 19.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    name: "Cricket Bat",
    price: 49.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1624880357913-a8539238245b",
  },
  {
    id: 23,
    name: "Yoga Mat",
    price: 15.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
  },
  {
    id: 24,
    name: "Dumbbells",
    price: 59.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    id: 25,
    name: "Skipping Rope",
    price: 5.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },

  // Books
  {
    id: 26,
    name: "React Guide Book",
    price: 14.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 27,
    name: "JavaScript Basics",
    price: 12.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
  },
  {
    id: 28,
    name: "Self Improvement Book",
    price: 10.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  },

  // Accessories
  {
    id: 29,
    name: "Sunglasses",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 30,
    name: "Wallet",
    price: 22.99,
    category: "Accessories",
    image: "https://plus.unsplash.com/premium_photo-1676999224991-8f3d35dbde54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbGV0fGVufDB8fDB8fHww",
  },
];

export default products;