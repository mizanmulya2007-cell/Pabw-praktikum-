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

## Pertemuan 9 — DOM, Events, and Interactivity

### A. Selecting Elements and DOM Setup

Pekerjaan Meeting 8 disalin ke folder `worksheet-p9/` sebagai dasar halaman profil dan data proyek. File `js/dom.js` ditambahkan untuk manipulasi DOM dan interaksi halaman. `profil.html` memuat `js/app.js` lebih dahulu, lalu `js/dom.js`, keduanya menggunakan `<script type="module">` sebelum penutup `</body>`. Nama file HTML di repository adalah `profil.html` (bukan `profile.html`).

`document.querySelector()` mengambil satu elemen, seperti `#list`, `#empty`, dan `#filter`. Untuk mengambil beberapa elemen digunakan `document.querySelectorAll()`, yang menghasilkan NodeList; NodeList dapat diubah menjadi array menggunakan `Array.from()` jika perlu memakai metode array seperti `map()` atau `filter()`. Penggunaan `Array.from()` dan `querySelectorAll()` dicatat sebagai konsep, bukan sebagai implementasi yang ditemukan di `js/dom.js`.

Selector diperiksa dengan mencocokkan ID pada HTML dan pemanggilannya di JavaScript. Chrome DevTools dan Console dapat digunakan untuk memastikan selector tidak menghasilkan `null`; hasil uji runtime tidak dicatat di bagian ini.

### B. Rendering Project List from Data

Daftar proyek diambil dari `daftarProyek` yang diekspor oleh `js/app.js`, bukan ditulis sebagai kartu proyek manual di HTML. Fungsi `buildCard()` membuat elemen `li` dengan `document.createElement()`, mengisi teks judul melalui `textContent`, lalu fungsi `render()` menambahkan kartu ke container menggunakan `append()`. Sebelum merender ulang, container dikosongkan dengan `container.textContent = ""`.

Implementasi tidak menggunakan `DocumentFragment`. `innerHTML` juga tidak digunakan untuk memasukkan konten proyek; `createElement()` dan `textContent` menghindari interpretasi teks data sebagai markup, yang penting terutama untuk konten yang tidak tepercaya dan risiko XSS.

### C. Event Delegation and Filter Buttons

Satu listener `click` dipasang pada parent `#filter` untuk menangani tombol kategori melalui event delegation. `event.target.closest("button")` mencari tombol yang diklik dan `button.dataset.category` mengambil kategorinya. Daftar proyek disaring dengan `filter()`, lalu hasilnya diberikan ke fungsi render.

Listener dipasang sekali saat modul dijalankan, bukan setiap kali kartu dirender. Kode yang tersedia tidak menunjukkan penggunaan `classList.toggle()` atau class CSS `active`, sehingga penandaan visual tombol filter aktif tidak dinyatakan telah diterapkan. Daftar kosong ditangani dengan menampilkan elemen `#empty`; setelah ada hasil, pesan tersebut disembunyikan.

### D. Render Function and Form Validation

Fungsi `render(daftar)` menyatukan pembaruan daftar proyek: container dikosongkan, kondisi tanpa data diperiksa, lalu kartu ditambahkan jika ada hasil. Validasi form mencegah submit memuat ulang halaman dengan `event.preventDefault()`. Nilai input diperiksa menggunakan `value.trim()` agar input kosong atau hanya berisi spasi tidak dianggap valid. Durasi juga dibatasi pada nilai 1 sampai 300.

Pesan error tersedia untuk masing-masing field dan ditampilkan atau disembunyikan melalui atribut `hidden`. Input tidak valid diberi `aria-invalid="true"`; atribut itu dihapus saat valid. Tombol submit dinonaktifkan sampai semua field valid, dan saat submit gagal, fokus diarahkan ke field tidak valid pertama menggunakan `focus()`.

### E. Debugging and Error Handling

Pemeriksaan debugging mencakup selector yang dapat menghasilkan `null`, urutan pemuatan script dan path `js/dom.js`, serta kemungkinan listener terpasang lebih dari sekali. Daftar tanpa hasil diperiksa untuk memastikan empty state muncul. Filter dan validasi form diperiksa melalui Console dan DevTools.

Kendala yang dicatat pada worksheet adalah pesan error form tidak selalu muncul secara konsisten saat form dikirim. Tindakan yang dilakukan adalah menambahkan atribut `hidden` pada elemen pesan error dan memeriksa kembali logika validasi. Implementasi saat ini mengubah `error.hidden` ketika field divalidasi, tetapi catatan yang tersedia tidak memastikan bahwa masalah konsistensi tersebut telah sepenuhnya terselesaikan.

### F. Checklist, Reflection, and Self-Assessment

**Checklist berdasarkan berkas yang tersedia**

- [x] HTML `profil.html`, file CSS, `js/app.js`, dan `js/dom.js` tersedia di repository. Nama HTML yang tersedia adalah `profil.html`.
- [x] Selector pada `js/dom.js` cocok dengan elemen yang didefinisikan di `profil.html`; keberhasilan runtime tidak dicatat.
- [x] Project list dirender dari data JavaScript dengan `createElement()` dan `textContent`.
- [x] Container dibersihkan sebelum rendering ulang.
- [x] Satu listener parent menangani klik tombol filter.
- [x] Empty state ditampilkan ketika tidak ada hasil.
- [x] Form mencegah pemuatan ulang halaman dan menyediakan pesan error per field.
- [x] README memuat deklarasi penggunaan AI untuk Pertemuan 9 di bawah.
- [ ] Bukti lebih dari satu commit P9 dengan pesan yang menjelaskan isi perubahan belum tersedia di catatan ini; nomor atau pesan commit tidak ditambahkan.

**Exit ticket**

- Selector project list adalah `document.querySelector("#list")`, yang disimpan dalam variabel `container` di `js/dom.js`.
- `querySelector()` mengembalikan satu elemen pertama yang cocok, sedangkan `querySelectorAll()` mengembalikan NodeList dari semua elemen yang cocok. `Array.from()` diperlukan ketika ingin menggunakan metode array seperti `map()` pada NodeList.
- Event delegation memungkinkan satu listener pada parent menangani interaksi tombol-tombol anak. `event.target.closest("button")` menemukan tombol terkait dari target klik.
- Jika `container.textContent = ""` dihapus dari `render()`, kartu dari render sebelumnya tidak dibersihkan dan dapat tetap tampil atau terduplikasi ketika hasil baru ditambahkan.
- `createElement()` dan `textContent` membuat struktur elemen dan memasukkan teks sebagai teks, bukan menafsirkannya sebagai HTML seperti `innerHTML`; ini lebih aman untuk konten yang tidak tepercaya.

**Refleksi**

Catatan refleksi worksheet menyebut masalah sering muncul ketika penyebab kesalahan diasumsikan tanpa memeriksa kode, selector, dan path file secara teliti. Bagian tersulit adalah debugging validasi form dan memastikan pesan error muncul serta menghilang pada waktu yang tepat. Target pembelajaran berikutnya adalah memperdalam manipulasi DOM, event delegation, dan penulisan JavaScript yang lebih bersih serta aman.

**Self-assessment: 89/100**

| Aspek | Nilai |
|---|---:|
| Selecting and filling elements | 18/20 |
| Rendering from data | 23/25 |
| Events and event delegation | 23/25 |
| Form validation | 18/20 |
| Code hygiene, AI disclosure, and evidence | 7/10 |
| **Total** | **89/100** |

Referensi bukti yang tersedia: `js/dom.js`, `js/app.js`, `worksheet-p9/README.md`, `profil.html`, dan file CSS proyek. Riwayat commit disebut sebagai referensi bukti pada worksheet, tetapi detail commit P9 tidak tersedia di catatan ini. Lokasi screenshot tidak dicatat.

### Deklarasi penggunaan AI — Pertemuan 9

Rincian kontribusi AI dan bagian yang dikerjakan atau diverifikasi sendiri oleh mahasiswa untuk Pertemuan 9 belum tersedia. Lengkapi deklarasi ini dengan menyebutkan bantuan AI yang benar-benar digunakan dan bagian yang dikerjakan atau diperiksa sendiri; tidak ada pembagian kontribusi spesifik yang diklaim di sini.
