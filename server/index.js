const mockAPIResponse = require("./mockAPI.js");

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
//middleware
// app.use(cors());
// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("dist"));

app.post("/get-nlp", async (req, res) => {
	try {
		const key = process.env.key;
		const link = req.body.link;
		console.log(req);
		console.log(link);
		const endpoint = `https://api.meaningcloud.com/sentiment-2.1&key=${key}&txt=${link}&lang=en`;
		const response = await axios(endpoint);
		res.json({
			status: "done",
			data: response.data,
			message: "data retrieved successfuly",
		});
		res.send("done");
	} catch (error) {
		console.log(error.message);
		res.send("sorry, there was a mistake in your API call");
	}
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./dist/index.html"));
});
app.listen(port, () => console.log(`server is PLaying on port ${port}`));

module.exports = {
	app,
};
