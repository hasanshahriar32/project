const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const port = process.env.port || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wobyu1r.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);

//middleware
app.use(cors());
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function run() {
  try {
    const serviceCollection = client.db("carService").collection("services");
    // const service = await serviceCollection.find().toArray();
    // console.log(service);.

    const orderCollection = client.db("carService").collection("orders");

    app.post("/jwt", (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10h",
      });
      res.json({ token });
    });

    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    //orders api
    app.post("/addOrder", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    });

    app.get("/orders", async (req, res) => {
      let query = {};
      if (req.query.UserId) {
        query = { UserId: req.query.UserId };
      }

      console.log(query);
      const cursor = orderCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });
    app.get("/singleOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orderCollection.findOne(query);
      res.send(result);
    });
    app.delete("/deleteOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/servicesUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const services = req.body;
      //   console.log(user);
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      const updatedServices = {
        $set: {
          price: services.price,
          picture: services.picture,
          carName: services.carName,
          company: services.company,
          email: services.email,
          phone: services.phone,
          madeIn: services.madeIn,
          about: services.about,
          registered: services.registered,
        },
      };
      const result = await serviceCollection.updateOne(
        query,
        updatedServices,
        options
      );
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/addService", async (req, res) => {
      const newService = req.body;
      console.log("adding new service", newService);
      const result = await serviceCollection.insertOne(newService);
      //   console.log("inserted count", result.insertedCount);
      res.json(result.insertedCount > 0);
    });
  } finally {
  }
}
run().catch((error) => console.log(error));

//user: paradox
//pass: 377YHXpwieeNdmeR

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
