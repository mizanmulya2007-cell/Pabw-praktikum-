# Worksheet PABW Pertemuan 8 — JavaScript Modern dan Array Methods

## Deskripsi

Latihan ini menambahkan JavaScript module pada halaman `profil.html`. Modul `js/app.js` mendefinisikan data profil dan proyek, lalu menampilkan serta mengolah data tersebut di browser Console.

## Tujuan dan konsep

Pekerjaan yang tercermin pada kode meliputi penggunaan `const` dan template literal, pure function, object, array of objects, serta array methods `map()`, `filter()`, `find()`, dan `sort()`. Spread operator digunakan untuk menyalin daftar proyek sebelum sorting.

## Struktur file dan folder

```text
worksheet-p8/
├── README.md
├── profil.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── gym.webp
└── js/
    └── app.js
```

`profil.html` memuat modul menggunakan `<script type="module" src="js/app.js"></script>`.

## Ringkasan pekerjaan

- Menghubungkan `profil.html` ke modul `js/app.js`.
- Mendefinisikan data nama, peran, keahlian, dan jumlah proyek menggunakan `const`, lalu membuat kalimat profil dengan template literal.
- Membuat pure function `buatPerkenalan()` dan `formatKeahlian()`.
- Membuat object `profil` serta array of objects `daftarProyek`.
- Menggunakan `console.log()` dan `console.table()` untuk menampilkan data dan hasil pengolahan.
- Menggunakan `filter()` untuk memilih proyek selesai, `find()` untuk mencari proyek “Health Web”, dan `map()` untuk mengambil judul proyek.
- Mengurutkan proyek berdasarkan tahun dengan `sort()` pada salinan array yang dibuat menggunakan spread operator; array asal tetap tersedia.

## Hasil pengujian

Kode dijalankan di browser dan diperiksa melalui Console. Setelah perbaikan, kode berjalan tanpa error merah di Console.

## Debugging

- Pernah terjadi error 404 karena path atau lokasi `app.js` tidak sesuai. Path modul kemudian diarahkan ke `js/app.js`.
- Pernah terjadi `ReferenceError: nama is not defined`. Setelah diperbaiki, kode berjalan tanpa error merah di Console.

## Git

Riwayat Git yang tersedia mencatat commit P8 `a91a774` dengan pesan `P8 - JavaScript modern dan array methods`. Instruksi atau pesan commit untuk setiap task tidak dicantumkan karena worksheet P8 yang memuatnya tidak tersedia di repository; README ini hanya mencatat commit yang dapat diverifikasi.

## Deklarasi penggunaan AI

AI digunakan sebagai bantuan untuk memahami konsep dan melakukan debugging. Saya sendiri yang menjalankan, menguji, dan memverifikasi kode.
