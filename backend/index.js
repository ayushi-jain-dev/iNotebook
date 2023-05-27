const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors') 

connectToMongo();

const app = express();
const port = 6000;

app.use(cors())
app.use(express.json())

// Set additional headers if needed
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
