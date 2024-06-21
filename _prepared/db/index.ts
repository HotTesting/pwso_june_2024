import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import { randomUUID } from "node:crypto";
import { env } from "../../env";

import { CreateDBUser } from "./models";

export class DB {
  static async connect() {
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(env.DB_CONNECTION_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
    return new DB(client);
  }

  constructor(private client: MongoClient) {}

  async close() {
    await this.client.close();
  }

  async createAdminUser(): Promise<CreateDBUser> {
    const doc: CreateDBUser = {
      _id: new ObjectId(),
      merchant: null,
      provider: "Email",
      role: "ROLE ADMIN",
      email: `testdb+${randomUUID()}@test.com`,
      // hashed xotabu4@gmail.com
      password: "$2a$10$SQtYcNaD8xJlHSIvAu/vKOt3Gr/hPzJMV2RHOXsqbhzwdKT7kqQxO",
      firstName: "test",
      lastName: "test",
    };

    await this.client.db("test").collection("users").insertOne(doc);
    return doc
  }
}
