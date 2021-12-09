let axios = require("axios");
let express = require("express");
let pg = require("pg");
let env = require("../env.json");

let app = express();
let port = 5000;
let hostname = "localhost";

app.use(express.json());

let baseUrl = env["baseUrl"];
let Pool = pg.Pool;
let pool = new Pool(env);
pool.connect().then(function () {
    console.log(`Connected to Database ${env.database}`);
});

app.get("/sign", function(req, res){
	let query = req.query;
    pool.query(`SELECT * FROM signs WHERE sign_name = $1`, [query.sign]).then(function (response)
        {
            res.status(200);
            res.send(response.rows);
        });
});

app.get("/daily", function (req, res) {
    let sign = req.query.sign;
    axios.get(baseUrl+"today/" + sign).then(function (response) {
        res.status(200);
        res.json(response.data);
    })
    .catch(function (error) {
           console.log("Server/API error. Please try again later.")
           })
})

app.get("/weekly", function (req, res) {
    let sign = req.query.sign;
    axios.get(baseUrl+"week/" + sign).then(function (response) {
        res.status(200);
        res.json(response.data);
    })
    .catch(function (error) {
           console.log("Server/API error. Please try again later.")
           })
})

app.get("/monthly", function (req, res) {
    let sign = req.query.sign;
    axios.get(baseUrl+"month/" + sign).then(function (response) {
        res.status(200);
        res.json(response.data);
    })
    .catch(function (error) {
           console.log("Server/API error. Please try again later.")
           })
})

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});

