const express = require("express"); //Import the express library
const mongoose = require("mongoose"); //Import the Mongoose library
const uri = require("./config/dbConfig");
const app = express();
app.use(express.urlencoded({ extended: false })) //Enables us to parse URL-ecndoed data
app.use(express.json()) //Enables us to parse JSON data

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:34453');
  res.header('Access-Control-Allow-Methods', 'GET'); // Add any additional HTTP methods you need to support
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Add any additional headers your client sends

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
// require("./routes/productRoutes")(app);
// require("./routes/userRoutes")(app);
// require("./routes/couponRoutes")(app);
// require("./routes/ordersRoutes")(app);

const routeFiles = [
  "./routes/userRoutes",
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





