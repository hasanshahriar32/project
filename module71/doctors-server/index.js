const express = require("express");
const port = process.env.POST || 5000;
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mxjeyo8.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(cors());
app.use(express.json());

async function run() {
  try {
    const appointmentOptionsCollection = client
      .db("doctorsportal")
      .collection("schedule");
    const bookingCollection = client.db("doctorsportal").collection("booking");

    // perform actions on the collection object
    app.get("/appointments", async (req, res) => {
      const cursor = appointmentOptionsCollection.find({});
      const appointments = await cursor.toArray();
      res.send(appointments);
    });

    app.get("/bookings", async (req, res) => {
      const cursor = bookingCollection.find({});
      const bookings = await cursor.toArray();
      res.send(bookings);
    });

    app.post("/bookings", async (req, res) => {
      const bookings = req.body;

      const result = await bookingCollection.insertOne(bookings);
      res.json(result);
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
