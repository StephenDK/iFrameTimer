const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
//body parser
app.use(express.json());

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log("Server is running");
  });