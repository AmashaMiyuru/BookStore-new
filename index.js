const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

//password
// U9SiCUcJHpH9tWYv

//username
//mern-server

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-server:U9SiCUcJHpH9tWYv@cluster0.ie43ajb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents
    const booksCollection = client.db("BookInventory").collection("books");


    //insert a book to the db using post method
    app.post("/upload-book", async(req, res) => {
      const data = req.body;
      const result = await booksCollection.insertOne(data);
      res.send(result);
    })
    
    // get all books from database

   /* app.get("/all-books", async(req, res) => {
      const books = booksCollection.find();
      const result = await books.toArray();
      res.send(result);
    }) */

    //update a book data : patch or update
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
     // console.log(id);
     const updateBookData = req.body;;
     const filter = {_id: new ObjectId(id)};
     const updateDoc = {
      $set: {
          ...updateBookData

           },
    }
    const options = { upsert: true };

    // update
    const result = await booksCollection.updateOne(filter, updateDoc, options);
    res.send(result);

    })

    //delete book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksCollection.deleteOne(filter);
      res.send(result);
    })

    // find by category
    
    app.get("/all-books", async(req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    })

    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await booksCollection.findOne(filter);
      res.send(result);
      
  })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})