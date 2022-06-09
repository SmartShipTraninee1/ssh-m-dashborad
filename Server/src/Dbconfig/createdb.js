const pool= require("./db")

const CreateDb =async ()=>{
try {
    const nedb=await pool.query(`CREATE DATABASE ssh_m_zala `);
   


  } catch (error) {
    // console.log(error.message);
  }
};

  module.exports = CreateDb;