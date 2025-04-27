phi = 3.14159

# Persegi
def luas_persegi(sisi):
    return sisi * sisi

def keliling_persegi(sisi):
    return 4 * sisi

# Persegi Panjang
def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

# Lingkaran
def luas_lingkaran(jari_jari):
    return phi * jari_jari * jari_jari

def keliling_lingkaran(jari_jari):
    return 2 * phi * jari_jari

# Suhu
def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def celsius_ke_kelvin(celsius):
    return celsius + 273.15
