import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

// connection string
const uri =
  "mongodb+srv://xotabu4:xotabu4@ecomercedemo.gmcnwqo.mongodb.net/?retryWrites=true&w=majority&appName=ecomercedemo";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const newUser = {
      _id: new ObjectId(),
      merchant: null,
      provider: "Email",
      role: "ROLE ADMIN",
      email: "testmongodb@mongo.db",
      // hashed xotabu4@gmail.com
      password: "$2a$10$SQtYcNaD8xJlHSIvAu/vKOt3Gr/hPzJMV2RHOXsqbhzwdKT7kqQxO",
      firstName: "admin",
      lastName: "admin",
    //   created: { $date: { $numberLong: "1690024910188" } },
    //   __v: { $numberInt: "0" },
    };

    await client.db("test").collection("users").insertOne(newUser);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

console.log("authenticating...");
// run().catch(console.dir);
