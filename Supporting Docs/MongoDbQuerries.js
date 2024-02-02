// projection

db.products.find(
  { "category.type": "Shoes" },
  { title: 1, rating: 1, price: 1 },
);

// updating single document
db.products.updateOne({ title: "Watch" }, { $set: { title: "Apple Watch" } });

// updating all records
db.products.updateMany({}, { $set: { category: { type: "Electronics" } } });

// update with embeded document
db.products.updateOne(
  { title: "Shoes" },
  { $set: { "category.type": "Shoes" } },
);

// using $gt operator  | $gte | $lt
db.products.find({ price: { $gt: 10000 } });

// implicit AND
db.products.find({ price: { $gt: 10000 }, rating: 5 });

// using $or
db.products.find({
  $or: [{ "category.type": "Electronics" }, { price: 5000 }],
});

// using projection & $in
db.products.find(
  { "category.type": { $in: ["Wearable", "Shoes"] } },
  { title: 1, _id: 0 },
);

// using not in
db.products.find(
  { "category.type": { $nin: ["Wearable", "Shoes"] } },
  { title: 1, _id: 0 },
);

// using limit() & sort()
db.products
  .find(
    { "category.type": { $nin: ["Wearable", "Shoes"] } },
    { title: 1, _id: 0 },
  )
  .sort({ title: 1 })
  .limit(3); // sort : 1 is for ascending, -1 is for descending

  // using aggregation pipeline()
  db.products.aggregate([
    { $group: { _id: "$category.type", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);