require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// serve any static files and
// handle React routing, return all requests to React app
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
	bodyParser.urlencoded({
		limit: "50mb",
		extended: true
	})
);

(async () => {})();

app.post("/percentage", (req, res) => {
	console.log(req.body);
	res.sendStatus(200);
});
