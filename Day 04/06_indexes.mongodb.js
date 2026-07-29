use('ecommerce')

// // Returns all documents
// db.sales.find()

// // Returns all indexes
// db.sales.getIndexes()

// Creates an index on passed parameter
db.sales.createIndex({ quantity: 1 })

