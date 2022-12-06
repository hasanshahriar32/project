const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.port || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
// const stripe = require("stripe")('sk_test_51LEJNMB95tAlnqnFE0Pv6sz5mNSiMWlP4YKpiDUV4SO9Uohprdw3cxhoKBMq43kiiPj8kcSod9H65a7X8MVzeRyL00Ly2pZzGs');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wobyu1r.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
// console.log(stripe);

//middleware
app.use(cors());
app.use(express.json());

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader) {
    return res.status(403).json({ message: "forbidden" });
  }
  const token = bearerHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "forbidden" });
    }
    req.decoded = decoded;
    next();
  });

  // if (typeof bearerHeader !== "undefined") {
  //   const bearer = bearerHeader.split(" ");
  //   const bearerToken = bearer[1];
  //   req.token = bearerToken;
  //   next();
  // } else {
  //   res.sendStatus(403);
  // }
}

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
    const usersCollection = client.db("bookSell").collection("users");
    const serviceCollection = client.db("bookSell").collection("allBooks");
    const category = client.db("bookSell").collection("category");
    // const service = await serviceCollection.find().toArray();
    // console.log(service);.

    const orderCollection = client.db("carService").collection("orders");

    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    app.put("/service/advertise/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const product = await serviceCollection.findOne(filter);
      if (product?.advertise == true) {
        const updateDoc = {
          $set: {
            advertise: false,
          },
        };
        const result = await serviceCollection.updateOne(filter, updateDoc);
        res.send(result);
      } else {
        const updateDoc = {
          $set: {
            advertise: true,
          },
        };
        const result = await serviceCollection.updateOne(filter, updateDoc);
        res.send(result);
      }
    });
    //advertise
    app.get("/services/advertised", async (req, res) => {
      const cursor = serviceCollection.find({ advertise: true });
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/services/seller/:id", async (req, res) => {
      const cursor = serviceCollection.find({ sellerId: req.params.id });
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/category", async (req, res) => {
      const cursor = category.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    // category
    app.get("/category/:id", async (req, res) => {
      const id = req.params.id;
      const query = { categoryId: id };
      console.log(query);
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });
    // category added
    app.post("/addCategory", async (req, res) => {
      const order = req.body;
      const result = await category.insertOne(order);
      res.send(result);
    });
    app.put("/categoryUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const services = req.body;
      //   console.log(user);
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      const updatedServices = {
        $set: {
          category: services.category,
          picture: services.picture,
          about: services.about,
        },
      };
      const result = await category.updateOne(query, updatedServices, options);
      res.send(result);
    });
    //user del
    app.delete("/deleteCategory/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await category.deleteOne(query);
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });
    app.get("/categoryEdit/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await category.findOne(query);
      res.send(result);
    });

    //orders api updated
    app.post("/addOrder", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const user = req.body;
      const uid = user.uid;
      const query = { uid: uid };
      const isAvailable = await usersCollection.findOne(query);
      if (isAvailable) {
        res.send(isAvailable);
        console.log(isAvailable);
      } else {
        const result = await usersCollection.insertOne(user);
        res.send(result);
      }
    });
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { uid: id };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    //remove user
    app.delete("/admin/deleteUser/:id", verifyToken, async (req, res) => {
      const decodecUid = req.decoded.uid;
      const filter = { uid: decodecUid };
      const userId = await usersCollection.findOne(filter);
      if (userId.role !== "admin") {
        return res.status(403).json({ message: "forbidden" });
      }

      const id = req.params.id;
      const query = { uid: id };
      //get user
      const user = await usersCollection.findOne(query);
      if (user?.status == "superAdmin") {
        return res.status(403).json({ message: "forbidden" });
      }
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/users/admin/:id", verifyToken, async (req, res) => {
      const decodecUid = req.decoded.uid;
      const filter = { uid: decodecUid };
      const userId = await usersCollection.findOne(filter);
      if (userId.role !== "admin") {
        return res.status(403).json({ message: "forbidden" });
      }
      const id = req.params.id;
      console.log(id);
      const query = { uid: id };
      console.log(query);
      // const user = req.body;
      // console.log(user);
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      //check if user is admin or not
      const user = await usersCollection.findOne(query);
      console.log(user);
      if (user?.status == "superAdmin") {
        const updatedUser = {
          $set: {
            role: "admin",
          },
        };
        const result = await usersCollection.updateOne(
          query,
          updatedUser,
          options
        );
        console.log(result);
        res.send(result);
      } else if (user?.role == "admin") {
        const updatedUser = {
          $set: {
            role: user?.userAbout,
          },
        };
        const result = await usersCollection.updateOne(
          query,
          updatedUser,
          options
        );
        console.log(result);
        res.send(result);
      } else {
        const updatedUser = {
          $set: {
            role: "admin",
          },
        };
        const result = await usersCollection.updateOne(
          query,
          updatedUser,
          options
        );
        console.log(result);
        res.send(result);
      }
    });

    app.get("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { uid: id };
      const result = await usersCollection.findOne(query);
      res.send({ isAdmin: result?.role === "admin" });
    });

    app.get("/orders", verifyToken, async (req, res) => {
      let query = {};
      const uid = req.query.UserId;
      const decodedUid = req.decoded.uid;

      if (uid != decodedUid) {
        return res.status(403).json({ message: "forbidden" });
      }

      if (req.query.UserId) {
        query = { UserId: req.query.UserId };
      }
      // console.log("token", req.headers.authorization);
      // console.log(query);
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

      app.post("/create-payment-intent", async (req, res) => {
        const booking = req.body;
        const price = booking.price;
        const amount = price * 100;
        const paymentIntent = await stripe.paymentIntents.create({
          currency: "usd",
          amount: amount,
          payment_method_types: ["card"],
        });
        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      });
    });

    app.get("/jwt", async (req, res) => {
      const uid = req.query.uid;
      const query = { uid: uid };
      const user = await usersCollection.findOne(query);
      if (user) {
        const token = jwt.sign(
          { email: user?.email, uid: user?.uid },
          process.env.ACCCESS_TOKEN,
          { expiresIn: "10h" }
        );
        res.send({ token: token });
      } else {
        res.status(403).send({ token: "" });
      }
      // console.log(user);
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
