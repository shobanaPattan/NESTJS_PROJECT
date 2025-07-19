const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { Pool, DatabaseError } = require('pg');
const {Pool} = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

//PostgreSQL connection config

const pool = new Pool({
user: 'postgres',
  host: 'localhost',
  database: 'formdb',
  password: 'postgres123',
  port: 5432,
});

//API to submit into PostgreSQL
app.post('/submit', async(req,res) => {
const {name,email} = req.body;

try{
    const result = await pool.query(
        'INSERT INTO users (name, email) values ($1, $2) RETURNING *',
        [name, email]
    );
    res.status(201).json(result.rows[0]);
}catch(error){
    console.error('Error saving data: ', error);
    res.status(500).json({error : 'Database error'});
}
});

app.listen(port, () =>{
console.log(`Server running at http://localhost:${port}`);
});

