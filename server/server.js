//boiler plate code
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'))

//endpoints


const { startButton } = require('./controller')
app.get("/api/start", startButton);

const { specButton } = require('./controller')
app.get("/api/spec", specButton);

const { thisButton } = require('./controller')
app.get("/api/this", thisButton);

const { thatButton } = require('./controller')
app.get("/api/that", thatButton);

const { ratingRadio } = require('./controller')
app.post("/api/rating", ratingRadio);


























app.listen(4000, () => console.log("Server running on 4000"));