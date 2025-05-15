# 📘 Aplikasi Manajemen Matakuliah

Aplikasi API sederhana menggunakan Pyramid dan PostgreSQL untuk manajemen data matakuliah. Dibuat sebagai tugas praktikum mata kuliah Pengembangan Web.

## 📌 Fitur

* CRUD (Create, Read, Update, Delete) untuk entitas Matakuliah
* Validasi kode\_mk unik
* RESTful API berbasis Pyramid
* Database menggunakan PostgreSQL
* Dapat diuji dengan REST Client, curl, atau Postman

## 🧱 Struktur Model

| Atribut  | Tipe    | Keterangan       |
| -------- | ------- | ---------------- |
| id       | Integer | Primary Key      |
| kode\_mk | String  | Unique, Required |
| nama\_mk | String  | Required         |
| sks      | Integer | Required         |
| semester | Integer | Required         |

## 🚀 Instruksi Instalasi dan Menjalankan Aplikasi

1. **Clone Repository**

```bash
git clone https://github.com/USERNAME/pyramid-matakuliah.git
cd pyramid-matakuliah
```

2. **Buat Virtual Environment (disarankan: conda)**

```bash
conda create -n matakuliah_env python=3.11
conda activate matakuliah_env
pip install -e .
conda install -c conda-forge psycopg2
```

3. **Setup Database PostgreSQL**

```bash
psql -U postgres
```

Lalu:

```sql
CREATE DATABASE matakuliah_db;
CREATE USER matakuliah_user WITH PASSWORD 'passwordku';
GRANT ALL PRIVILEGES ON DATABASE matakuliah_db TO matakuliah_user;
```

> Jika menggunakan username/password berbeda, ubah file `development.ini`.

4. **Ubah File `development.ini`**

```ini
sqlalchemy.url = postgresql+psycopg2://matakuliah_user:passwordku@localhost:5432/matakuliah_db
```

5. **Jalankan Migrasi Database**

```bash
alembic -c development.ini upgrade head
```

6. **Jalankan Server**

```bash
pserve development.ini --reload
```

7. **Buka di browser**

```
http://localhost:6543
```

## 🥪 Contoh Pengujian API

### Tambah Matakuliah

```http
POST http://localhost:6543/matakuliah
Content-Type: application/json

{
  "kode_mk": "IF101",
  "nama_mk": "Kriptografi",
  "sks": 3,
  "semester": 5
}
```

### Lihat Semua

```http
GET http://localhost:6543/matakuliah
```

### Ambil Satu

```http
GET http://localhost:6543/matakuliah/1
```

### Update

```http
PUT http://localhost:6543/matakuliah/1
Content-Type: application/json

{
  "nama_mk": "Kriptografi Lanjut",
  "sks": 4
}
```

### Hapus

```http
DELETE http://localhost:6543/matakuliah/1
```

## 📝 Penilaian Tugas

| Aspek                       | Bobot | Status |
| --------------------------- | ----- | ------ |
| Model Data                  | 30%   | ✅ ✔️   |
| API Endpoints (CRUD)        | 40%   | ✅ ✔️   |
| Dokumentasi & Kerapian Kode | 30%   | ✅ ✔️   |

## 📌 Catatan

* File `development.ini` boleh diubah sesuai kredensial masing-masing
* Bisa menggunakan `development.ini.example` untuk distribusi template

---
Nama: \[Jhoel]
NIM: \[122140174]
