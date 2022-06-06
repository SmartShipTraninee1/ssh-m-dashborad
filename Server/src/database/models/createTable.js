const pool=require('../db1');
const Createtable =async ()=>{
    try {
        const nedb=await pool.query(`CREATE TABLE employee_info(
            employee_id integer primary key,
            emp_name character varying,
            emp_email character varying,
            emp_password character varying,
            emp_dob integer,
            emp_mobile bigint,
            emp_address character varying,
            emp_designation character varying

        )`);
    } catch (error) {
        console.log(error)
    }
  };

  module.exports = Createtable;