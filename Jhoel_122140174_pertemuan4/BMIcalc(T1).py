berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (cm): "))

tinggi = tinggi / 100 #konversi dri cm ke m
bmi = berat / (tinggi ** 2)
print(f"\nBMI Anda: {bmi:.2f}")

if bmi < 18.5:
    kategori = "Berat badan anda kurang"
elif 18.5 <= bmi < 25:
    kategori = "Berat badan anda normal"
elif 25 <= bmi < 30:
    kategori = "Berat badan anda berlebih"
else:
    kategori = "Overweight wow"

print(f"Analisis: {kategori}")
