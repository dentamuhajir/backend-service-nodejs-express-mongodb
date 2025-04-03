const mongoose = require('mongoose');

//const MONGO_URI = "mongodb+srv://dentamuhajir:eW95wn1yPBfD6oPS@backenddb.oiomyfk.mongodb.net/myDatabaseName?retryWrites=true&w=majority";
const MONGO_URI = "mongodb+srv://dentamuhajir:eW95wn1yPBfD6oPS@backenddb.oiomyfk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
async function testDBConnection() {
    console.log("⏳ Attempting to connect to MongoDB...");

    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB Connection Successful!");
        process.exit(0); // Exit process if successful
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1); // Exit process if failed
    }
}

testDBConnection();
