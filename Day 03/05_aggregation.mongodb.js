use('ecommerce')


// db.sales.insertMany([
//     { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//     { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//     { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//     { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//     { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

// db.sales.aggregate([
//     { $match: { category: "Fruit" } }, // Stage 1 // $match : it compares the documents with the  condition and returns if true
//     { $project: { _id: 0, price: 1, item: 1 } } // Stage 2 // $project : returns the only specified fields
// ])


// The below query first groups the category and totalsales together and then sort the totalSales in descending order
db.sales.aggregate([
    { $group: { _id: "$category", totalSales: { $sum: { $multiply: ["$price", "$quantity"] } } } },
    { $sort: { totalSales: - 1 } }
])