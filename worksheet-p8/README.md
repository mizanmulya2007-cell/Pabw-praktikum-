# PABW — Mizan Mulya El Shirazy — 25523195

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: jadwal dan target olahraga saya.

- Judul halaman: Jadwal dan Target Olahraga Saya
- Deskripsi: Halaman yang berisi jadwal latihan dan target olahraga saya.
- Tautan navigasi: Jadwal Latihan, Target Saya, Catat Latihan
- Dua bagian utama: Jadwal Latihan, Catat Latihan
- Kolom tabel: Hari, Jenis Latihan, Durasi
- Kolom form: Jenis Latihan, Tanggal, Durasi
- Gambar: gym.webp

### Riwayat Commit Pertemuan 3

| Lembar | Tahap | Pesan commit yang disarankan |
|---|---|---|
| A | Rencana halaman di README | Pertemuan 3: rencana halaman profil di README |
| B | Kerangka dokumen dan head | Pertemuan 3: kerangka dokumen dan bagian head |
| C | Struktur semantik | Pertemuan 3: struktur semantik header nav main footer |
| D | Tabel dan gambar | Pertemuan 3: tabel data dan gambar dengan alt text |
| E | Form dan validasi | Pertemuan 3: form dengan label dan validasi |
| F | Pemeriksaan dan perbaikan | Pertemuan 3: perbaikan hasil pemeriksaan |
| G | Penyelesaian halaman | Pertemuan 3: halaman profil selesai |

Worksheet Pertemuan 3 menyediakan titik simpan Git setelah setiap Lembar A sampai G. Tabel di atas mencatat pesan commit yang disarankan oleh worksheet.

## Pertemuan 4 — Design token halaman profil

Tujuan P4 adalah menerapkan CSS Fundamental dan Design Token pada halaman profil P3 tanpa mengubah isi dan tujuan halaman olahraga yang sudah dibuat.

Implementasi P4 menggunakan lima file CSS berikut:

- `tokens.css` — primitive dan semantic design token.
- `base.css` — reset global, tipografi, gambar, dan focus indicator.
- `layout.css` — navbar, susunan halaman, katalog kartu, dan footer.
- `komponen.css` — kartu, gambar, form, tombol, invalid state, dan kontrol tema.
- `tema.css` — tema gelap otomatis dan override manual berbasis `:has()`.

Warna utama yang dipilih adalah hijau `--color-primary` karena sesuai dengan konteks olahraga dan memberi aksen yang jelas untuk navigasi, judul kartu, tombol, serta fokus. Semantic token digunakan agar perubahan satu nilai dapat diterapkan secara konsisten.

| Token | Nilai | Untuk apa |
| --- | --- | --- |
| `--space-1` | `0.25rem` | Jarak terkecil |
| `--space-2` | `0.5rem` | Jarak kecil |
| `--space-3` | `0.75rem` | Jarak antar elemen kecil |
| `--space-4` | `1rem` | Jarak komponen umum |
| `--space-6` | `2rem` | Jarak bagian halaman |
| `--radius-full` | `999rem` | Bentuk pil pada kontrol tema |
| `--text-sm` | `0.875rem` | Ukuran teks label dan pesan |
| `--text-md` | `1rem` | Ukuran teks utama |
| `--text-xl` | `2rem` | Ukuran heading tingkat dua dan judul kecil |
| `--text-3xl` | `3.5rem` | Ukuran heading utama |
| `--radius-md` | `0.75rem` | Radius kartu dan kontrol |
| `--shadow-1` | `0 0.25rem 1rem rgb(37 37 31 / 0.08)` | Bayangan kartu |
| `--color-bg` | `#f4f1ea` | Latar belakang halaman |
| `--color-fg` | `#25251f` | Warna teks utama |
| `--color-surface` | `#fffdf8` | Latar kartu dan kontrol form |
| `--color-border` | `#d7d1c3` | Garis batas komponen |
| `--color-primary` | `#176b5b` | Aksen utama, link, judul, dan tombol |
| `--color-danger` | `#a93d2f` | Penanda input yang tidak valid |
| `--color-focus` | `#c85b28` | Indikator fokus keyboard |

Kriteria audit satu baris: perubahan pada `--color-primary` di lapis semantic harus berdampak pada link navigasi, judul/aksen kartu, tombol, dan elemen lain yang memakai token utama. Tema gelap mengganti lapis semantic yang sama tanpa mengubah primitive token.

Tema manual dibuat dengan checkbox, label, dan selector `:has()` tanpa JavaScript atau penyimpanan browser.

### Riwayat Commit Pertemuan 4

| Lembar | Tahap | Pesan commit yang disarankan |
|---|---|---|
| A | Rencana design token di README | Pertemuan 4: rencana design token di README |
| B | tokens.css dan pemuatan berkas gaya | Pertemuan 4: tokens.css dan pemuatan berkas gaya |
| C | base.css reset dan tipografi | Pertemuan 4: base.css reset dan tipografi |
| D | layout.css navbar dan katalog kartu | Pertemuan 4: layout.css navbar dan katalog kartu |
| E | Gaya form dan keadaan fokus | Pertemuan 4: gaya form dan keadaan fokus |
| F | Tema gelap dan tombol pengalih | Pertemuan 4: tema gelap dan tombol pengalih |
| G | Tampilan halaman profil selesai | Pertemuan 4: tampilan halaman profil selesai |

Worksheet Pertemuan 4 menyediakan titik simpan Git setelah setiap Lembar A sampai G. Tabel di atas mencatat pesan commit yang disarankan oleh worksheet.

## Catatan penggunaan AI

Dalam pengerjaan tugas ini, saya menggunakan ChatGPT sebagai pendamping selama proses pengembangan. AI membantu memberikan penjelasan konsep, memberikan contoh kode, membantu debugging, serta memberikan panduan penggunaan Git dan GitHub. Proses implementasi, pengujian, dan pengelolaan project dilakukan oleh saya sendiri dengan mengikuti arahan dan memahami langkah-langkah yang diberikan.

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

### A. Setup dan integrasi JavaScript

File `js/app.js` dibuat untuk menuliskan dan menjalankan latihan JavaScript. File tersebut dihubungkan ke `profil.html` menggunakan `<script type="module" src="js/app.js"></script>`. Proyek dijalankan melalui local server agar halaman dan modul JavaScript dapat dibuka dari browser.

### B. JavaScript Modern ES6+

Latihan menggunakan `const` untuk nilai yang tidak perlu di-assign ulang dan `let` untuk nilai yang perlu diubah. Template literals (`` `${...}` ``) digunakan untuk menyusun kalimat profil dengan menyisipkan nilai variabel. Nullish coalescing (`??`) menyediakan nilai pengganti saat nilai di sisi kiri `null` atau `undefined`, sedangkan optional chaining (`?.`) membantu mengakses properti berantai dengan aman ketika nilai perantaranya mungkin tidak tersedia.

Data profil dikelola melalui variabel JavaScript, termasuk nama, peran, keahlian, dan jumlah proyek. Nilai-nilai tersebut digunakan untuk membentuk kalimat profil dan data objek `profil`.

### C. Pure Functions

Fungsi `buatPerkenalan()` menerima data nama dan peran lalu menghasilkan teks perkenalan. Fungsi `formatKeahlian()` menerima daftar keahlian dan menghasilkan teks yang diformat. Keduanya menghasilkan output berdasarkan input yang diberikan, sehingga hasilnya dapat digunakan tanpa mengubah data masukan.

### D. Struktur Data dan Array Methods

Data profil disusun dalam objek `profil`, sedangkan proyek disimpan sebagai array objek `daftarProyek`. `console.table()` digunakan untuk melihat data keahlian, daftar proyek, hasil pemfilteran, dan judul proyek dalam bentuk tabel di Console.

- `filter()` memilih proyek yang memenuhi kondisi, seperti proyek yang sudah selesai.
- `find()` mencari satu proyek berdasarkan judul.
- `map()` membentuk array baru yang berisi judul proyek.
- Spread operator (`...`) menyalin `daftarProyek` sebelum `sort()` digunakan. Pengurutan dilakukan pada salinan `proyekTerurut`, sehingga array aslinya tidak langsung dimodifikasi.

### E. Debugging dan penanganan error

Selama pengerjaan, debugging mencakup pemeriksaan kesalahan path file serta variabel `nama` yang belum terdefinisi. Error diperiksa melalui Console browser. Kendala Live Server juga tercatat dalam pengerjaan. Catatan yang tersedia tidak memastikan bahwa seluruh kendala tersebut telah diperbaiki, sehingga penyelesaiannya tidak dinyatakan di sini.

### F. Checklist, refleksi, dan evaluasi

Checklist worksheet:

- [x] Mempraktikkan `map()`, `filter()`, dan `find()`.
- [x] Memeriksa output/error melalui Console dan mencatat bukti Console pada worksheet; lokasi bukti tidak dirinci di README ini.
- [x] Mencantumkan deklarasi penggunaan AI; rincian pembagian bantuan dan pekerjaan mandiri perlu dilengkapi pada deklarasi di bawah.
- [x] Mencatat lebih dari satu referensi commit: `a91a774` dan `8a60d24`. Isi commit tidak dirinci.

**Refleksi:** Debugging JavaScript, terutama menemukan masalah path file dan variabel yang belum terdefinisi, menjadi bagian yang menantang. Target pembelajaran berikutnya adalah DOM dan event handling.

**Penilaian mandiri: 80/100**

| Aspek | Nilai |
|---|---:|
| Syntax dan types | 12/15 |
| Pure functions | 20/25 |
| Array methods | 20/25 |
| Error handling dan Console | 18/20 |
| Code cleanliness, penggunaan AI, dan commits | 10/15 |
| **Total** | **80/100** |

### Deklarasi penggunaan AI — Pertemuan 8

Rincian bagian P8 yang dibantu AI dan bagian yang dikerjakan atau diverifikasi sendiri oleh mahasiswa belum dapat dipastikan dari informasi yang tersedia. Lengkapi deklarasi ini dengan menyebutkan bantuan AI yang benar-benar digunakan serta pekerjaan dan pemeriksaan yang dilakukan sendiri; tidak ada pembagian spesifik yang diklaim di sini.
