const employeeRepository = require('../repository/employeeRepository');

const EmployeeController = {
    getAll: async (req, res) => {
        const employees = await employeeRepository.getAll();
        res.json(employees);
    },

    getById: async (req, res) => {
        const employees = await employeeRepository.getById(req.params.id);
        
        if (!employees) return res.status(404).json({message: 'Not found'});
        
        res.json(employees);
    },

    create: async (req, res) => {
        const {
            nik,
            email,
            username,
            password,
            name,
            gender,
            birth_date,
            birth_place,
            phone,
            province,
            city,
            subdistrict,
            village,
            address,
            type,
            start_contract,
            end_contract,
            marriage_status,
            doctor_code_bpjs
        } = req.body;

        const toNullIfEmpty = (val) => val === '' ? null : val;

        // lakukan pengecekan nik
        const checkNik = await employeeRepository.getById(nik);
        if(checkNik){
            return res.status(409).json({message: 'NIK sudah digunakan'});
        }

        const newEmp = await employeeRepository.create({
            nik,
            email,
            username,
            password,
            name,
            gender,
            birth_date:  toNullIfEmpty(birth_date),
            birth_place,
            phone,
            province,
            city,
            subdistrict,
            village,
            address,
            type: Array.isArray(type) ? type : (type ? [type] : []),
            start_contract: toNullIfEmpty(start_contract),
            end_contract: toNullIfEmpty(end_contract),
            marriage_status,
            doctor_code_bpjs
        });

        res.status(201).json(newEmp);
    },

    update: async (req, res) => {
        console.log(req);
        
        const {
            email,
            username,
            password,
            name,
            gender,
            birth_date,
            birth_place,
            phone,
            province,
            city,
            subdistrict,
            village,
            address,
            type,
            start_contract,
            end_contract,
            marriage_status,
            doctor_code_bpjs
        } = req.body;

        const toNullIfEmptyOrStringNull = (val) => {
            return val === '' || val === 'null' ? null : val;
        };

        const updated = await employeeRepository.update(req.params.id, {
            email,
            username,
            password,
            name,
            gender,
            birth_date:  toNullIfEmptyOrStringNull(birth_date),
            birth_place,
            phone,
            province,
            city,
            subdistrict,
            village,
            address,
            type: Array.isArray(type) ? type : (type ? [type] : []),
            start_contract: toNullIfEmptyOrStringNull(start_contract),
            end_contract: toNullIfEmptyOrStringNull(end_contract),
            marriage_status,
            doctor_code_bpjs
        });

        res.json(updated);
    },

    delete: async (req, res) => {
        const deleted = await employeeRepository.delete(req.params.id);
        res.json(deleted);
    },
};

module.exports = EmployeeController;