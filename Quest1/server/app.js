require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const mysql = require("mysql");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.DB_PORT,
    connectionLimit: 100,
});

module.exports = db;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.post('/inputcart', (req, res)=>{
    const phonenumber = req.body.token
    const itemid = req.body.id
    const count = req.body.count

    
});
app.get('outputcart', )
app.listen(process.env.S_PORT, () => {
    console.log('sever is running on port:', process.env.S_PORT);
});