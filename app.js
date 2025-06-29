const express = require('express');
const checkoutRoutes = require("./routes/checkout.route.js")
const path = require("path");



const app = express();

// PORT
const PORT = 3000;

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

// TEMPLATE
app.set("view engine", "ejs");

// ROUTES
app.use('/user', checkoutRoutes);

// LISTEN TO INCOMING REQUESTS
app.listen(
  PORT,
  () => {
    console.log(`Server listening on http://localhost:${PORT}/user/home`);
  }
)