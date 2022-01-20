let db = new Mongo().getDB( "product" );

// db.products.drop();

db.products.deleteMany({});

db.products.insertMany([
  {
  name: "Tofu geräuchert",
  price: 1.79,
  category: "lebensmittel",
  image: "https://cdn.shop.edeka/d110001/derivates/17/255/199/DV019_4311501700747_PER.png"
  },
  {
    name: "Gewürzmühle",
    price: 3.99,
    category: "küchenzubehör",
    image: "https://cdn.shop.edeka/d110001/derivates/17/001/989/$v3/DV019_4311536961427_PER.png"
  },
  {
    name: "Haferflocken kernig",
    price: 0.49,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/259/747/$v5/DV019_4311596443314_PER.png"
  },
  {
    name: "Junge Erbsen extra fein",
    price: 0.79,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/003/376/$v6/DV019_4311596438853_PER.png"
  },
  {
    name: "Frische Schlagsahne",
    price: 0.79,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/003/260/$v4/DV019_4311596460540_PER.png"
  },
  {
    name: "Kochlöffel Nylon",
    price: 2.39,
    category: "küchenzubehör",
    image: "https://cdn.shop.edeka/d110001/derivates/17/001/105/409/$v4/DV019_4311536962011_PER.png"
  },
  {
    name: "Eiweißbrot, geschnitten",
    price: 1.39,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/001/195/479/DV019_4311501630327_PER.png"
  },
  {
    name: "Paprika-Chips geriffelt",
    price: 1.19,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/254/219/$v2/DV019_4311501493687_PER.png"
  },
  {
    name: "Paprika-Chips",
    price: 0.79,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/252/650/$v2/DV019_4311501634394_PER.png"
  },
  {
    name: "Sweet Potato Chips",
    price: 1.79,
    category: "lebensmittel",
    image: "https://cdn.shop.edeka/d110001/derivates/17/262/267/$v2/DV019_4311501665381_PER.png"
  },
]);


db.storelocations.deleteMany({});

db.storelocations.insertMany([
  {
    name: "EDEKA Kottmeierstr.",
    coordinates: "13.52575,52.46319",
  },
  {
    name: "EDEKA Center Niederschöneweide",
    coordinates: "13.50961,52.45775",
  },
]);
