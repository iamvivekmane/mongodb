use('ecommerce')

// Updates the value of one document, the first bracket is the selector and another one is the data to be updated
// db.products.updateOne({ "name": "Wireless Mouse" }, { $set: { "price": 1000 } })

// Updates the value of multiple documents
// db.products.updateMany({ "category": "India electronics" }, { $set: { "category": "Electronics" } })

// It pushes a new value to the array in the document
db.products.updateOne({ name: "Wireless Mouse" }, { $push: { tags: "new " } })