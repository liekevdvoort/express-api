var express = require("express");

var app = express();

app.get("/getPlayers", (req, res) => {
    res.send("Get players was called");
});

app.get("/", (req, res) => {
    return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
    return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
    return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
    return res.send("Received a DELETE HTTP method");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
