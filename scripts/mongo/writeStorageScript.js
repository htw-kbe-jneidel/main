let db = new Mongo().getDB( "product" );

print( `
let db = new Mongo().getDB( "storage" );

db.productquantityatlocations.deleteMany({});
db.productquantityatlocations.insertMany([` );
db.products.find({}).forEach(p => {
  db.storelocations.find({}).forEach(s => {
    print( `  { storeLocationId: ${s._id}, productId: ${p._id}, amount: ${Math.floor( Math.random()*8 )} },` );
  });
} )
print( "]);" );
