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
