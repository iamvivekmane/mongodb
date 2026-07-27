use('ecommerce')

// Returns all the documents from the products collection
// db.products.find()

// Returns the documents which has name as wireless mouse
// db.products.find({ "name": "Wireless Mouse" })

//Returns the documents which has price greater than 100
// db.products.find({ "price": { $gt: 100 } })

//Returns the documents which has price greater than or equal to 100 and less than equal to 1000
// db.products.find({ "price": { $gte: 100, $lte: 1000 } })

// OR operator : Returns the documents which are true for one of the conditions
// db.products.find({ $or: [{ "price": 100 }, { "category": "Electronics" }] })

// AND operator : Returns the documents which are true for both the conditions (if we use find with a comma it will work same as AND operator)
// db.products.find({ $and: [{ "price": 799 }, { "category": "Electronics" }] })



// Projection

// Shows only fields that we specify in the command (1 : shows, 0 : do not show)
// db.products.find({}, { name: 1, price: 1, _id: 0 })


// Sorting and Limiting
// Returns the documents in sorted form (1 : increasing, -1 : decreasing), skip is used to skip number of documents from the starting of the result and also limit the number of documents
db.products.find().sort({ price: 1 }).skip(1).limit(2)

