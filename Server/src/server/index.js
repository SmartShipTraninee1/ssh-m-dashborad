const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;
app.use(cors());
app.use(express.json());
const CreateDb = require('../Dbconfig/createdb');
const Createtable = require('../Dbconfig/models/createTable');
const registerEmployee = require('../Routes/Registeremployee');
app.use(registerEmployee);
    //For Creating Database
           CreateDb();
   //For creating Tables        
           Createtable();

   // Sample Get Method
                app.get('/', (req, res) => {
                    res.send('Hello World!')
                 })

// App Listen On This Port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})