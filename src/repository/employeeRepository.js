const db = require('../config/db');

const EmployeeRepository = {
    getAll: async () => {
        const res = await db.query('SELECT * FROM employee');
        return res.rows;
    },

    getById: async (id) => {
        const res = await db.query('SELECT * FROM employee WHERE nik=$1', [id]);
        return res.rows[0];
    },

    create: async (employee) => {
        const res = await db.query(
            'INSERT INTO employee (nik, email, username, password, name, gender, birth_date, birth_place, phone, province, city, subdistrict, village, address, type, start_contract, end_contract, marriage_status, doctor_code_bpjs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
            [employee.nik, employee.email, employee.username, employee.password, employee.name, employee.gender, employee.birth_date, employee.birth_place, employee.phone, employee.province, employee.city, employee.subdistrict, employee.village, employee.address, employee.type, employee.start_contract, employee.end_contract, employee.marriage_status, employee.doctor_code_bpjs]
        );
        return res.rows[0];
    },

    update: async (id, employee) => {
        const res = await db.query(
            'UPDATE employee set email=$1, username=$2, password=$3, name=$4, gender=$5, birth_date=$6, birth_place=$7, phone=$8, province=$9, city=$10, subdistrict=$11, village=$12, address=$13, type=$14, start_contract=$15, end_contract=$16, marriage_status=$17, doctor_code_bpjs=$18 WHERE nik=$19 RETURNING *',
            [employee.email, employee.username, employee.password, employee.name, employee.gender, employee.birth_date, employee.birth_place, employee.phone, employee.province, employee.city, employee.subdistrict, employee.village, employee.address, employee.type, employee.start_contract, employee.end_contract, employee.marriage_status, employee.doctor_code_bpjs, id]
        );
        return res.rows[0];
    },

    delete: async (id) => {
        const res = await db.query('DELETE FROM employee WHERE nik=$1', [id]);
        return res.rows[0];
    }
}

module.exports = EmployeeRepository;