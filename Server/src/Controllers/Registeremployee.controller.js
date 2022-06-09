const db = require("../Dbconfig/db1");

//  REGISTER CONTROLLER

exports.createEmployee = async (req, res) => {
    const { employee_id, employee_name, employee_email, emp_password, emp_dob, emp_mobile, emp_address, emp_designation } = req.body;
    const { rows } = await db.query(
        "CALL Employee_registers($1,$2,$3,$4,$5,$6,$7,$8)",
        [employee_id, employee_name, employee_email, emp_password, emp_dob, emp_mobile, emp_address, emp_designation]
    );

    res.status(201).send({
        message: "Register successfully!",
        body: {
            product: { employee_id, employee_name, employee_email, emp_password, emp_dob, emp_mobile, emp_address, emp_designation }
        },
    });
};

// GET CONTROLLER

exports.readEmployee = async (req, res) => {
    const response = await db.query('SELECT * FROM employee_info ORDER BY employee_id DESC');
    res.status(200).send(response.rows);
}
