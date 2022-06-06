const express = require('express')
const app = express();
const cors=require('cors');
const pool=require('../database/db')
const port = 5000;
app.use(cors());
app.use(express.json());
const CreateDb =require('../database/createdb');
const Createtable = require('../database/models/createTable');




CreateDb();


Createtable();




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})