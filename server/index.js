// I didn't want to make a tree shaking, just for the future improvements
const path = require("path");
const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//init express
const app = express();
//init dotenv
dotenv.config();

//init port
const port = 8089;
//middlewares
/* // app.use(cors());
// app.use(morgan("dev")); */

//instead of using Express Parser, I choosed bodyParser just as a practice to another solution
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("dist"));

//Define the request receiver URL
app.post("/get-nlp", async (req, res) => {
	try {
		const key = process.env.key;
		const link = req.body.link;
		// console.log(req);
		// console.log(link);
		const endpoint = `https://api.meaningcloud.com/sentiment-2.1&key=${key}&txt=${link}&lang=en`;
		const response = await axios(endpoint);
		res.json({
			status: "done",
			data: response.data,
			message: "data retrieved successfuly",
		});
		res.send("request-Completed");
	} catch (error) {
		console.log(error.message);
		res.send(
			"sorry, there was a mistake in your API call - Check for Connection"
		);
	}
});

//init the root url
app.get("/", (req, res) => {
	res.sendFile(path.resolve("./dist/index.html"));
});
// init the server
app.listen(port, () => console.log(`server is PLaying on port ${port}`));

module.exports = {
	app,
};
