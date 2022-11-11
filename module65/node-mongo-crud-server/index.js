const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
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
    const user = {
      name: "Paradox",
      email: "lol@hol.com",
      phone: "01700000000",
    };
    const result = await userCollection.insertOne(user);
    console.log(result);
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
