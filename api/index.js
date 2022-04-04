const express = require("express");
var bgjgLexicon = require("bgjg");
var cors = require('cors');

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(port, () => {
    console.log(`Listening to requests on ${port}`);
});

app.get("/api", (req, res) => {
    var bgjgText = bgjgLexicon.generateLexicon();
    res.status(200).json({ message: bgjgText });
});

module.exports = express;
