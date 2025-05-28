# employee-management

## Langkah Instalasi

1. **Clone repository**
    ```bash
    git clone https://github.com/agungwahyu23/employee-management.git
    cd employee-management
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Buat file konfigurasi environment**
    - Salin `.env.example` ke `.env` dan sesuaikan konfigurasi database PostgreSQL Anda.

4. **Siapkan Database PostgreSQL**
    - Buat database dengan nama `db_company`:
      ```sql
      CREATE DATABASE db_company;
      ```
    - Buat tabel `employee`:
      ```sql
      CREATE TABLE employee (
         nik VARCHAR(50) PRIMARY KEY,
         email VARCHAR(100) NOT NULL,
         username VARCHAR(50) NOT NULL,
         password VARCHAR(255) NOT NULL,
         name VARCHAR(100) NOT NULL,
         gender VARCHAR(10),
         birth_date DATE,
         birth_place VARCHAR(100),
         phone VARCHAR(20),
         province VARCHAR(100),
         city VARCHAR(100),
         subdistrict VARCHAR(100),
         village VARCHAR(100),
         address TEXT,
         type VARCHAR(50),
         start_contract DATE,
         end_contract DATE,
         marriage_status VARCHAR(20),
         doctor_code_bpjs VARCHAR(50)
      );
      ```

5. **Jalankan aplikasi**
    ```bash
    npm start
    ```

Aplikasi akan berjalan menggunakan Express.js dan terhubung ke database PostgreSQL.