export interface CoffeeItem {
  id: number;
  coffeeImage: string;
  coffeeTitle: string;
  bakeryImage: string;
  bakeryName: string;
  price: number;
}

export const coffeeMenu: CoffeeItem[] = [
  {
    id: 1,
    coffeeImage: "/cappuccino.jpg",
    coffeeTitle: "Capuccino",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 8
  },
  {
    id: 2,
    coffeeImage: "/matcha-latte.jpg",
    coffeeTitle: "Matcha Latte",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 10
  },
  {
    id: 3,
    coffeeImage: "/golden-latte.jpg",
    coffeeTitle: "Golden Latte",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 8
  },
  {
    id: 4,
    coffeeImage: "/Hot-chocolate.jpeg",
    coffeeTitle: "Hot Chocolate",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 12
  },
  {
    id: 5,
    coffeeImage: "/iced-latte.jpg",
    coffeeTitle: "Iced Latte",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 12
  },
  {
    id: 6,
    coffeeImage: "/plain-croissant.jpg",
    coffeeTitle: "Plain Croissant",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 20
  },
  {
    id: 7,
    coffeeImage: "/french-macaron.jpg",
    coffeeTitle: "French Macaron",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 30
  },
  {
    id: 8,
    coffeeImage: "/original-blend-coffee.jpg",
    coffeeTitle: "Original Blend Coffee",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 12.99
  },
  {
    id: 9,
    coffeeImage: "/energy-cookie.jpeg",
    coffeeTitle: "Energy Cookie",
    bakeryImage: "/bakery-image.jpg",
    bakeryName: "Minden Bakery",
    price: 28
  }
];
