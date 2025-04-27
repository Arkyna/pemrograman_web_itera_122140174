DataMahasiswa = [
    {"nama": "Arkyna", "nim": "122XXX174", "uts": 70, "uas": 70, "tugas": 80},
    {"nama": "Mr. J", "nim": "122XXX124", "uts": 75, "uas": 70, "tugas": 80},
    {"nama": "Yahoo", "nim": "122XXX125", "uts": 65, "uas": 60, "tugas": 70},
    {"nama": "Google", "nim": "122XXX126", "uts": 55, "uas": 50, "tugas": 60},
    {"nama": "Fesnuk", "nim": "122XXX127", "uts": 95, "uas": 90, "tugas": 50},
]

# Bungkus dan hitung
for m in DataMahasiswa:
    nilai_akhir = 0.3 * m["uts"] + 0.4 * m["uas"] + 0.3 * m["tugas"]
    m["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        m["grade"] = "A"
    elif nilai_akhir >= 70:
        m["grade"] = "B"
    elif nilai_akhir >= 60:
        m["grade"] = "C"
    elif nilai_akhir >= 50:
        m["grade"] = "D"
    else:
        m["grade"] = "E"

# Tampilkan tabel
print("\nData Mahasiswa:")
print("{:<10} {:<15} {:<5} {:<5} {:<5} {:<6} {:^10}".format("Nama", "NIM", "UTS", "UAS", "Tugas", "Akhir", "Grade"))
for m in DataMahasiswa:
    print("{:<10} {:<15} {:<5} {:<5} {:<5} {:.2f} {:^10}".format(
        m["nama"], m["nim"], m["uts"], m["uas"], m["tugas"], m["nilai_akhir"], m["grade"]
    ))


# cari nilai tertinggi
tertinggi = max(DataMahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(DataMahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\nTop Lokal: {tertinggi['nama']} ({tertinggi['nilai_akhir']:.2f})")
print(f"Bottom frag: {terendah['nama']} ({terendah['nilai_akhir']:.2f})")
