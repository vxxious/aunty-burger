export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "burgers", name: "Burgers" },
  { id: "hotdogs", name: "Hot Dogs" },
  { id: "wings", name: "Chicken Wings" },
  { id: "fries", name: "Loaded Fries" },
  { id: "platters", name: "Platters" },
  { id: "drinks", name: "Drinks" },
  { id: "extras", name: "Extras" },
];

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "mini-beef-chicken",
    name: "Mini Beef/Chicken",
    description: "Our signature mini burger with juicy beef or tender chicken patty",
    price: 1500,
    category: "burgers",
    popular: true,
  },
  {
    id: "mini-cheese-burger",
    name: "Mini Cheese Burger",
    description: "Mini burger topped with melted cheese and special sauce",
    price: 2500,
    category: "burgers",
  },
  {
    id: "regular-beef-chicken",
    name: "Regular Beef/Chicken",
    description: "Full-size burger with premium beef or chicken, fresh veggies and our special sauce",
    price: 3000,
    category: "burgers",
    popular: true,
  },
  {
    id: "regular-cheese-burger",
    name: "Regular Cheese Burger",
    description: "Our classic burger loaded with melted cheese, fresh toppings and signature sauce",
    price: 4000,
    category: "burgers",
    popular: true,
  },

  // Hot Dogs
  {
    id: "mini-plain-hotdog",
    name: "Mini Plain",
    description: "Simple and delicious mini hot dog in a soft bun",
    price: 500,
    category: "hotdogs",
  },
  {
    id: "mini-meaty-hotdog",
    name: "Mini Meaty",
    description: "Mini hot dog loaded with savory minced meat",
    price: 1000,
    category: "hotdogs",
  },
  {
    id: "regular-plain-hotdog",
    name: "Regular Plain",
    description: "Classic hot dog in a toasted bun with your choice of toppings",
    price: 1500,
    category: "hotdogs",
  },
  {
    id: "regular-meaty-hotdog",
    name: "Regular Meaty",
    description: "Loaded hot dog with seasoned minced meat and special sauce",
    price: 2000,
    category: "hotdogs",
    popular: true,
  },
  {
    id: "cheesy-hotdog",
    name: "Cheesy",
    description: "Ultimate hot dog smothered in melted cheese and toppings",
    price: 3000,
    category: "hotdogs",
  },

  // Chicken Wings
  {
    id: "wings-1pc",
    name: "Chicken Wing (1 Piece)",
    description: "Single piece of our crispy, saucy chicken wing",
    price: 600,
    category: "wings",
  },
  {
    id: "wings-5pcs",
    name: "Chicken Wings (Pack of 5)",
    description: "Five pieces of our signature glazed chicken wings",
    price: 3000,
    category: "wings",
    popular: true,
  },
  {
    id: "wings-10pcs",
    name: "Chicken Wings (Pack of 10)",
    description: "Ten pieces of finger-licking good chicken wings",
    price: 6000,
    category: "wings",
  },

  // Loaded Fries
  {
    id: "french-fries",
    name: "French Fries",
    description: "Crispy golden french fries, perfectly seasoned",
    price: 3000,
    category: "fries",
  },
  {
    id: "chicken-loaded-fries",
    name: "Chicken Loaded Fries",
    description: "Fries topped with seasoned chicken, sauce, and toppings",
    price: 6000,
    category: "fries",
  },
  {
    id: "meaty-loaded-fries",
    name: "Meaty Loaded Fries",
    description: "Fries loaded with seasoned minced meat and drizzled sauce",
    price: 6000,
    category: "fries",
    popular: true,
  },
  {
    id: "cheesy-loaded-fries",
    name: "Cheesy Loaded Fries",
    description: "Ultimate fries smothered in melted cheese and toppings",
    price: 7000,
    category: "fries",
  },

  // Platters
  {
    id: "platter-1",
    name: "Platter 1",
    description: "1 Mini Beef Burger, 1 Meaty Loaded Fries, 3pcs of Wings",
    price: 5300,
    category: "platters",
  },
  {
    id: "platter-2",
    name: "Platter 2",
    description: "1 Regular Beef Burger, 5pcs of Wings",
    price: 6000,
    category: "platters",
  },
  {
    id: "platter-3",
    name: "Platter 3",
    description: "1 Regular Beef Burger and Half Loaded Fries",
    price: 6000,
    category: "platters",
  },
  {
    id: "platter-4",
    name: "Platter 4",
    description: "1 Regular Beef Burger, 5pcs of Wings and Full Loaded Fries",
    price: 12000,
    category: "platters",
    popular: true,
  },
  {
    id: "platter-5",
    name: "Platter 5",
    description: "1 Regular Beef Burger, 10pcs of Wings, 1 Meaty Hotdog, 1 Loaded Fries",
    price: 17000,
    category: "platters",
  },

  // Drinks
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Ice-cold Coca-Cola, the classic refreshment",
    price: 600,
    category: "drinks",
    popular: true,
  },
  {
    id: "fanta-orange",
    name: "Fanta Orange",
    description: "Refreshing orange-flavored Fanta",
    price: 600,
    category: "drinks",
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Crisp lemon-lime Sprite",
    price: 600,
    category: "drinks",
  },
  {
    id: "malta-guinness",
    name: "Malta Guinness",
    description: "Rich and malty Nigerian favorite",
    price: 800,
    category: "drinks",
  },
  {
    id: "chi-exotic",
    name: "Chi Exotic Juice",
    description: "Tropical fruit juice blend",
    price: 2500,
    category: "drinks",
  },
  {
    id: "five-alive",
    name: "Five Alive Pulpy",
    description: "Citrus fruit juice with real pulp",
    price: 1500,
    category: "drinks",
  },
  {
    id: "vanilla-milkshake",
    name: "Vanilla Milkshake",
    description: "Creamy vanilla milkshake, thick and delicious",
    price: 3000,
    category: "drinks",
    popular: true,
  },
  {
    id: "chocolate-milkshake",
    name: "Chocolate Milkshake",
    description: "Rich chocolate milkshake made with real cocoa",
    price: 3000,
    category: "drinks",
  },
  {
    id: "strawberry-milkshake",
    name: "Strawberry Milkshake",
    description: "Sweet strawberry milkshake, a fruity treat",
    price: 3000,
    category: "drinks",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Pure drinking water",
    price: 300,
    category: "drinks",
  },

  // Extras
  {
    id: "extra-beef-patty",
    name: "Beef Patty",
    description: "Add an extra juicy beef patty to your order",
    price: 1000,
    category: "extras",
  },
  {
    id: "extra-chicken",
    name: "Chicken",
    description: "Add extra chicken to any item",
    price: 1000,
    category: "extras",
  },
  {
    id: "extra-cheese",
    name: "Cheese",
    description: "Add melted cheese to your order",
    price: 1000,
    category: "extras",
  },
  {
    id: "extra-sausage",
    name: "Sausage",
    description: "Add sausage to your order",
    price: 500,
    category: "extras",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Chika O.",
    rating: 5,
    text: "Best burgers in Abuja! The cheese burger is absolutely divine. I order every weekend.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Tunde A.",
    rating: 5,
    text: "The loaded fries are incredible. So much flavor. Aunty Burgers never disappoints.",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Blessing E.",
    rating: 5,
    text: "Quick delivery via WhatsApp, and the wings are always fresh and crispy. My go-to spot.",
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Emeka N.",
    rating: 5,
    text: "Platter 4 is amazing value. Perfect for sharing with friends. The quality is consistent.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Fatima M.",
    rating: 5,
    text: "The hot dogs are so good. Love the cheesy option. Will definitely order again.",
    date: "5 days ago",
  },
];

export const businessInfo = {
  name: "Aunty Burgers",
  phone: "09124502743",
  whatsapp: "2349124502743",
  instagram: "@_auntyburgers",
  instagramUrl: "https://www.instagram.com/_auntyburgers?igsh=MTdrcnhvOGxzaHViNA==",
  tiktok: "@auntyburgers_",
  tiktokUrl: "https://www.tiktok.com/@auntyburgers_?_r=1&_t=ZM-93EX5zPHVcq",
  location: "Abuja, Nigeria",
  hours: "9am - 6pm Daily",
  tagline: "Premium burgers crafted with care",
  story: `Aunty Burgers has grown into a beloved local favorite, known for our juicy patties, fresh ingredients, and signature sauces.

Every burger we make is crafted with attention to detail. We source the freshest ingredients daily and prepare everything from scratch. Our secret sauce recipe has been perfected over years, and our customers keep coming back for that unique Aunty Burgers taste.

Whether you're craving a classic cheese burger, loaded fries, or our famous chicken wings, we've got you covered. Order via WhatsApp for quick delivery anywhere in Abuja.`,
};
