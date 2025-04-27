import math_operations as mo
from math_operations import celsius_ke_fahrenheit as ckf, celsius_ke_kelvin as ckk

# Persegi
sisi = 9
print(f"Luas persegi: {mo.luas_persegi(sisi)}")
print(f"Keliling persegi: {mo.keliling_persegi(sisi)}")

# Persegi panjang
panjang, lebar = 3, 5
print(f"Luas persegi panjang: {mo.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang: {mo.keliling_persegi_panjang(panjang, lebar)}")

# Lingkaran
jari_jari = 9
print(f"Luas lingkaran: {mo.luas_lingkaran(jari_jari)}")
print(f"Keliling lingkaran: {mo.keliling_lingkaran(jari_jari)}")

# Suhu
c = 31
print(f"{c}°C = {ckf(c)}°F")
print(f"{c}°C = {ckk(c)}K")
