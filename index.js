var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var contentDatabase = [
    { uploadedfile: "c:/test/test", filelocation: "Shared/testlieke" },
];

app.get("/getLocalContent", (req, res) => {
    res.send(contentDatabase);
});

app.get("/", (req, res) => {
    return res.send("Received a GET HTTP method");
});

app.post("/postContentToBsn", (req, res) => {
    const content = req.body;
    contentDatabase.push(content);
    return res.status(201).send("created content");
});

// standards
app.post("/", (req, res) => {
    return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
    return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
    return res.send("Received a DELETE HTTP method");
});

// listen to server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
