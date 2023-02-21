const {MongoClient} = require("mongodb");
 
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
 
const client = new MongoClient(uri, {useUnifiedTopology: true});
 
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
 
        const database = client.db('fruitsDB');
        const fruitsCollection = database.collection('fruits');

        fruitsCollection.insertMany([
          {
            name: "Apple",
            score: 8,
            review: "Nam"
          },
          {
            name: "Orange",
            score: 2,
            review: "Like color"
          },
          {
            name: "Banana",
            score: 1,
            review: "Moon"
          }
        ])
        
        const cursor = fruitsCollection.find({});
 
        if ((await cursor.countDocuments) === 0) {
            console.log("No documents found!");
        }
 
        await cursor.forEach((fruit) => {
            console.log(fruit.name);
        });
 
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
 
run().catch(console.dir);
