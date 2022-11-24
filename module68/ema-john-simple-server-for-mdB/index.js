const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mxjeyo8.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//middleware
app.use(cors());
app.use(express.json());

// client.connect((err) => {

//   // perform actions on the collection object
//   client.close();
// });

async function run() {
  try {
    const productcollection = client.db("emaJohn").collection("products");
    app.get("/products", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      console.log(page, size);
      const query = {};
      const cursor = productcollection.find(query);
      const products = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
      const count = await productcollection.estimatedDocumentCount();
      res.send({ products, count });
    });

    app.post("/productsByKeys", async (req, res) => {
      const ids = req.body;
      //   console.log(ids);
      const idsObj = ids.map((id) => ObjectId(id));
      const query = { _id: { $in: idsObj } };
      const cursor = productcollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
  } finally {
    // await client.close();
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("amazon server is on");
});

app.listen(port, () => {
  console.log(`emaJohn running on port ${port}`);
});
