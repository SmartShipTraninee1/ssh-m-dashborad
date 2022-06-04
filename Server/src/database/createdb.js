const pool= require("./db")

 const CreateDb =async ()=>{
    const nedb=await pool.query("CREATE DATABASE demo34")
  };

  module.exports = CreateDb;