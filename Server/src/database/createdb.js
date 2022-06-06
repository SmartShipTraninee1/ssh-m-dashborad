const pool= require("./db")

const CreateDb =async ()=>{
try {
    const nedb=await pool.query("CREATE DATABASE ssh_m_dashboard")
  } catch (error) {
    console.log(error);
  }
};

  module.exports = CreateDb;