const express = require("express"); //Import the express library
const mongoose = require("mongoose"); //Import the Mongoose library
const uri = require("./config/dbConfig");
const app = express();
app.use(express.urlencoded({ extended: false })) //Enables us to parse URL-ecndoed data
app.use(express.json()) //Enables us to parse JSON data

// require("./routes/productRoutes")(app);
// require("./routes/userRoutes")(app);
// require("./routes/couponRoutes")(app);
// require("./routes/ordersRoutes")(app);

const routeFiles = [
  "./routes/productRoutes",
  "./routes/userRoutes",
  "./routes/couponRoutes",
  "./routes/ordersRoutes"
]

routeFiles.forEach(routeFile => {
  require(routeFile)(app);
})

//Connect to MongoDB
mongoose.connect(uri).then(() => {
  const port = 5000 //Define the port that will be used
  app.listen(port, () => { //Start the server
    console.log("Example app listeting at http://localhost:" + port)
  })
  console.log("Connected to Mongodb");
}).catch((error) => {
  console.log(error)
})





