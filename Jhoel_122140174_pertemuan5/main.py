from library_item import Book, Magazine
from library import Library

def menu():
    print("""
===== Choose =====
1. Tambah Buku
2. Tambah Majalah
3. Tampilkan Semua Koleksi
4. Cari Berdasarkan Judul
5. Cari Berdasarkan ID
6. get out
""")

library = Library()

while True:
    menu()
    choice = input("Pilih opsi (1-6): ").strip()

    if choice == "1":
        item_id = input("Masukkan ID Buku: ").strip()
        title = input("Masukkan Judul Buku: ").strip()
        author = input("Masukkan Nama Pengarang: ").strip()
        library.add_item(Book(item_id, title, author))
        print("Added.")

    elif choice == "2":
        item_id = input("Masukkan ID Majalah: ").strip()
        title = input("Masukkan Judul Majalah: ").strip()
        issue = input("Masukkan Nomor Edisi: ").strip()
        library.add_item(Magazine(item_id, title, issue))
        print("Added.")

    elif choice == "3":
        print("\nSaved List:")
        library.display_all_items()

    elif choice == "4":
        keyword = input("Masukkan kata kunci judul: ").strip()
        results = library.search_by_title(keyword)
        if results:
            print(f"\nHasil pencarian untuk '{keyword}':")
            for item in results:
                item.display_info()
        else:
            print("Kosong")

    elif choice == "5":
        search_id = input("Masukkan ID item: ").strip()
        item = library.search_by_id(search_id)
        if item:
            print("Ditemukan:")
            item.display_info()
        else:
            print("Tidak Ditemukan.")

    elif choice == "6":
        break

    else:
        print("invalid. Pilih angka 1-6.")
