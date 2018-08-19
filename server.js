var express = require('express');
var app = express();
const pg = require("pg");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();

const pool = new pg.Pool({
    user: 'epn-dev',
    host: 'localhost',
    database: 'DB_PV_PAMA3',
    password: 'epn1234',
    port: '5432'
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/VW_LOOKUP_REPORT', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('SELECT * FROM VW_LOOKUP_EFFICIENTV2', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_DATE_PERIOD', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('SELECT * FROM VW_DATE_PERIOD', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_SUM_POWER', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select sum(peak_power) as total_power from vw_lookup_kwh_daily', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_AVG_POWER', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select avg(peak_power) as total_power from vw_lookup_kwh_daily', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_SUM_CO2', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select sum(co2avoid) as co2 from vw_lookup_co2avoid', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_AVG_IRRADIANCE', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select avg(irradience) as irradience from vw_lookup_efficientv2', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_LOOKUP_MONTHLY_SUMPOWER', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select * from vw_lookup_monthly_sumpower', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/VW_LOOKUP_MONTHLY_EFFECTIVENESS', function (req, res) {

    pool.connect((err, client, done) => {
      if (err) throw err
      client.query('select * from vw_lookup_monthly_effectiveness', (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send({ message: "", err })
            client.end();
        } else {
            let rows = result.rows
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
        }
      })
      done()
    })
});

app.get('/', function(req, res) {
    res.sendfile('index.html'); //load the single web view
});

var server = app.listen(7000, function () {
    console.log('Server is running...');
});
