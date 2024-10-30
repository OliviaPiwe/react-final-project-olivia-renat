export type MenuEng = {
  title: string;
  path: string;
  description: string;
  img: string;
  dishes: {
    id: string;
    name: string;
    price: string;
    description: string;
    availability: boolean;
    allergens: string[];
    img: string;
  }[];
};

export const menuEng: MenuEng[] = [
  {
    title: "Main Course",
    path: "main-course",
    description:
      "A selection of delicious main dishes prepared with fresh ingredients and love. Our offerings range from hearty meat and fish options to vegetarian and vegan creations that delight every palate.",
    img: "https://images.pexels.com/photos/3791089/pexels-photo-3791089.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: "1",
        name: "Spaghetti Bolognese",
        price: "12_99",
        description: "Classic Italian pasta with rich bolognese sauce",
        availability: true,
        allergens: ["gluten", "dairy"],
        img: "https://images.pexels.com/photos/28575312/pexels-photo-28575312/free-photo-of-traditionelle-spaghetti-bolognese-mit-frischen-zutaten.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "4",
        name: "Margherita Pizza",
        price: "10_99",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        availability: true,
        allergens: ["gluten", "dairy"],
        img: "https://images.pexels.com/photos/19602378/pexels-photo-19602378/free-photo-of-sauerteigpizza-margherita-zeit.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "5",
        name: "Grilled Salmon",
        price: "14_99",
        description: "Perfectly grilled salmon served with lemon butter sauce",
        availability: true,
        allergens: ["fish"],
        img: "https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "6",
        name: "Vegan Burger",
        price: "11_99",
        description: "Plant-based patty with lettuce, tomato, and vegan mayo",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/6546033/pexels-photo-6546033.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "9",
        name: "Shrimp Tacos",
        price: "12_49",
        description: "Spicy shrimp tacos with fresh salsa and creamy sauce",
        availability: true,
        allergens: ["shellfish", "gluten"],
        img: "https://images.pexels.com/photos/27365309/pexels-photo-27365309/free-photo-of-mexikanisches-restaurant.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "13",
        name: "Beef Tacos",
        price: "10_49",
        description: "Soft shell tacos with seasoned beef, cheese, and lettuce",
        availability: true,
        allergens: ["gluten", "dairy"],
        img: "https://images.pexels.com/photos/7613555/pexels-photo-7613555.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "14",
        name: "Penne Alfredo",
        price: "11_99",
        description: "Penne pasta in a creamy Alfredo sauce with Parmesan",
        availability: true,
        allergens: ["gluten", "dairy"],
        img: "https://images.pexels.com/photos/29042359/pexels-photo-29042359/free-photo-of-kostliche-pesto-penne-nudeln-in-elegantem-ambiente.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "17",
        name: "Clam Chowder",
        price: "9_99",
        description: "Creamy clam chowder with potatoes and celery",
        availability: true,
        allergens: ["shellfish", "dairy"],
        img: "https://images.pexels.com/photos/16357831/pexels-photo-16357831/free-photo-of-lebensmittel-essen-mahlzeit-schussel.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Appetizer",
    path: "appetizer",
    description:
      "A delightful assortment of appetizers that awaken your taste buds. From crispy bites to refreshing salads, each dish is crafted with high-quality ingredients, perfect for sharing or enjoying on your own.",
    img: "https://images.pexels.com/photos/39826/chunks-wreak-menu-gastronomy-39826.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: "2",
        name: "Caesar Salad",
        price: "6_99",
        description: "Fresh romaine lettuce with Caesar dressing and croutons",
        availability: true,
        allergens: ["dairy", "egg"],
        img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "8",
        name: "Garlic Bread",
        price: "3_99",
        description: "Toasted baguette with garlic butter and herbs",
        availability: true,
        allergens: ["gluten", "dairy"],
        img: "https://images.pexels.com/photos/1460860/pexels-photo-1460860.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "15",
        name: "Greek Salad",
        price: "7_99",
        description: "Salad with cucumber, tomatoes, olives, and feta cheese",
        availability: true,
        allergens: ["dairy"],
        img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "20",
        name: "Avocado Toast",
        price: "6_49",
        description: "Toasted bread with smashed avocado and a hint of lime",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Dessert",
    path: "dessert",
    description:
      "Indulge in our decadent desserts that promise to satisfy your sweet tooth. From rich chocolate cakes to light fruit tarts, each creation is made with love and the finest ingredients, ensuring a delightful finish to your meal.",
    img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: "3",
        name: "Chocolate Cake",
        price: "5_99",
        description: "Rich and moist chocolate cake",
        availability: true,
        allergens: ["gluten", "dairy", "nuts"],
        img: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "10",
        name: "Cheesecake",
        price: "6_99",
        description: "Creamy cheesecake with a graham cracker crust",
        availability: true,
        allergens: ["dairy", "gluten"],
        img: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },

      {
        id: "16",
        name: "Fruit Bowl",
        price: "4_49",
        description: "Fresh seasonal fruits served in a bowl",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "18",
        name: "Vegan Chocolate Pudding",
        price: "5_49",
        description: "Rich and creamy vegan chocolate pudding",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Beverage",
    path: "beverage",
    description:
      "A refreshing selection of beverages to complement your meal. From revitalizing smoothies and freshly squeezed juices to exquisite wines and craft beers, each drink is designed to enhance your dining experience.",
    img: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: "7",
        name: "Mango Smoothie",
        price: "4_99",
        description:
          "Refreshing mango smoothie made with fresh mangoes and almond milk",
        availability: true,
        allergens: ["nuts"],
        img: "https://images.pexels.com/photos/4955257/pexels-photo-4955257.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "19",
        name: "Iced Latte",
        price: "4_49",
        description: "Chilled espresso with milk and ice",
        availability: true,
        allergens: ["dairy"],
        img: "https://images.pexels.com/photos/29095101/pexels-photo-29095101/free-photo-of-eiskaffee-auf-holztisch-im-cafe-ambiente.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },

      {
        id: "21",
        name: "Mineral Water",
        price: "2_49",
        description: "Refreshing mineral water, still or sparkling",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/593099/pexels-photo-593099.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "22",
        name: "Orange Juice",
        price: "3_49",
        description: "Freshly squeezed orange juice",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "23",
        name: "Green Tea",
        price: "2_99",
        description: "A hot cup of green tea, aromatic and soothing",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "24",
        name: "Red Wine",
        price: "5_99",
        description: "Fine red wine, perfect with a main course",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/95960/pexels-photo-95960.jpeg?auto=compress&cs=tinysrgb&w420&h=250&dpr=1",
      },
      {
        id: "25",
        name: "Beer",
        price: "4_49",
        description: "Chilled beer, freshly tapped",
        availability: true,
        allergens: ["gluten"],
        img: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
  {
    title: "Side",
    path: "side",
    description:
      "Enhance your meal with our delightful selection of side dishes. Each option is crafted to complement your main course, featuring fresh vegetables, flavorful grains, and classic accompaniments that add texture and taste to your dining experience.",
    img: "https://images.pexels.com/photos/5203696/pexels-photo-5203696.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
    dishes: [
      {
        id: "11",
        name: "French Fries",
        price: "3_49",
        description: "Crispy golden french fries, lightly salted",
        availability: true,
        allergens: [],
        img: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
      {
        id: "12",
        name: "Chicken Wings",
        price: "8_99",
        description: "Spicy chicken wings with ranch dipping sauce",
        availability: true,
        allergens: ["dairy"],
        img: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1",
      },
    ],
  },
];
