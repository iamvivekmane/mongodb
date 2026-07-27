use('ecommerce')

// Deletes one document based on the selector
// db.contacts.deleteOne({ name: "Alice" })

// Deletes multiple document based on the selector
db.orders.deleteMany({ status: "Delivered" })