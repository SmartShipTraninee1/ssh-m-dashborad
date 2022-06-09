const Pool=require('pg').Pool;

const pool=new Pool({
    user:'postgres',
    password:'postgres',
    // database:'ssh_m_dashboard',
    host:'localhost',
    port:5432
});
module.exports=pool;