let db = new Mongo().getDB( "storage" );

db.productquantityatlocations.deleteMany({});
db.productquantityatlocations.insertMany([
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036a"), amount: 6 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036a"), amount: 0 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036b"), amount: 3 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036b"), amount: 7 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036c"), amount: 1 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036c"), amount: 4 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036d"), amount: 6 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036d"), amount: 4 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036e"), amount: 5 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036e"), amount: 6 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b2036f"), amount: 5 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b2036f"), amount: 2 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b20370"), amount: 6 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b20370"), amount: 0 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b20371"), amount: 2 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b20371"), amount: 0 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b20372"), amount: 5 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b20372"), amount: 7 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20374"), productId: ObjectId("61e961ba36fb8b6706b20373"), amount: 3 },
  { storeLocationId: ObjectId("61e961ba36fb8b6706b20375"), productId: ObjectId("61e961ba36fb8b6706b20373"), amount: 1 },
]);
