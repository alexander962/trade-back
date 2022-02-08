const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 6001;

const apiRoutes = require('./module/routes/user-routes.js');

app.use(cors());

app.use(parser.json);

const uri =
    'mongodb+srv://Alexander:1488sasha@userstrade.o3krr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", () => {
    console.error.bind(console, "connection error:");
});
db.once("open", () => {
    console.log("connected");
});

app.use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}...`);
});