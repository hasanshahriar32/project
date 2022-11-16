const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// //async await function
// // async function run() {}
// const run = async () => {}
// run().catch((error) => console.error(error));

//paradox-bd
// grammarpro

const uri =
  "mongodb+srv://paradox-bd:grammarpro@cluster0.stjsrkg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// try {
// } catch (error) {
//   console.error(error);
// } finally {
// }

async function run() {
  try {
    const userCollection = client.db("nodeMongoCrud").collection("users");
    // const user = {
    //   name: "Paradox",
    //   email: "lol@hol.com",
    //   phone: "01700000000",
    // };
    // const result = await userCollection.insertOne(user);
    // console.log(result);

    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      //   console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
      console.log(result);
    });

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const user = req.body;
      //   console.log(user);
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      };
      const result = await userCollection.updateOne(
        query,
        updatedUser,
        options
      );
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      //must do the query carefully because it will delete all the data if you don't do it carefully or give and empty object
      //   console.log("delete this", id);
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch((error) => console.error(error));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
