
const router = require('express-promise-router')();
const employeecontroller = require('../Controllers/Registeremployee.controller');

// FOR POST USER INFORMATION
router.post('/register', employeecontroller.createEmployee);

// FOR GET ALL USER INFORMATION 
router.get('/register', employeecontroller.readEmployee);

module.exports = router;




















// const express=require('express');
// const EmployeeNotFound = require('./EmployeeNotFound');
// const pool=require('../Dbconfig/db1')

// const router=express.Router();


// router.post('/register', async (req, res) => {
//   try {
//     let sql="CALL Employee_registers($1,$2,$3,$4,$5,$6,$7,$8)";
//     const { employee_id,employee_name,employee_email, emp_password,emp_dob ,emp_mobile ,emp_address ,emp_designation  } = req.body;
//     // console.log(req.body)
//  await pool.query(sql
//      , [employee_id,employee_name,employee_email, emp_password,emp_dob ,emp_mobile ,emp_address ,emp_designation]);
//     res.json({ success: "data have been save" })
//   } catch (error) {
//     console.error(error)
//   }
// });
// module.exports=router;