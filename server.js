const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./controllers/routes");
const routesAPI = require("./controllers/routesAPI");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose successfully connected");
  })
  .catch((err) => {
    console.log("Mongoose failed to connect.");
    console.log(err);
  });

app.use(routes);
app.use(routesAPI);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
