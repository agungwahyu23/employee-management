class Employee{
    constructor(nik, email, username, name, gender, birth_date, phone, province, city, subdistrict, type, start_contract, end_contract, doctor_code_bpjs){
        this.nik = nik;
        this.email = email;
        this.username = username;
        this.name = name;
        this.gender = gender;
        this.birth_date = birth_date;
        this.phone = phone;
        this.province = province;
        this.city = city;
        this.subdistrict = subdistrict;
        this.type = type;
        this.start_contract = start_contract;
        this.end_contract = end_contract;
        this.doctor_code_bpjs = doctor_code_bpjs;
    }
}

module.exports = Employee;