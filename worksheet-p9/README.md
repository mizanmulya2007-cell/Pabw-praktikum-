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

### Riwayat commit Pertemuan 3

| Lembar | Tahap | Pesan commit yang disarankan |
|---|---|---|
| A | Rencana halaman di README | Pertemuan 3: rencana halaman profil di README |
| B | Kerangka dokumen dan bagian head | Pertemuan 3: kerangka dokumen dan bagian head |
| C | Struktur semantik | Pertemuan 3: struktur semantik header nav main footer |
| D | Tabel dan gambar | Pertemuan 3: tabel data dan gambar dengan teks alternatif |
| E | Form dan validasi | Pertemuan 3: form dengan label dan validasi |
| F | Pemeriksaan dan perbaikan | Pertemuan 3: perbaikan hasil pemeriksaan |
| G | Penyelesaian halaman | Pertemuan 3: halaman profil selesai |

Lembar kerja Pertemuan 3 menyediakan titik simpan Git setelah setiap Lembar A sampai G. Tabel di atas mencatat pesan commit yang disarankan oleh lembar kerja.

## Pertemuan 4 — Token desain halaman profil

Tujuan P4 adalah menerapkan dasar-dasar CSS dan token desain pada halaman profil P3 tanpa mengubah isi dan tujuan halaman olahraga yang sudah dibuat.

Implementasi P4 menggunakan lima berkas CSS berikut:

- `tokens.css` — token desain primitif dan semantik.
- `base.css` — reset global, tipografi, gambar, dan indikator fokus.
- `layout.css` — bilah navigasi, susunan halaman, katalog kartu, dan footer.
- `komponen.css` — kartu, gambar, form, tombol, keadaan tidak valid, dan kontrol tema.
- `tema.css` — tema gelap otomatis dan penimpaan manual berbasis `:has()`.

Warna utama yang dipilih adalah hijau `--color-primary` karena sesuai dengan konteks olahraga dan memberi aksen yang jelas untuk navigasi, judul kartu, tombol, serta fokus. Token semantik digunakan agar perubahan satu nilai dapat diterapkan secara konsisten.

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
| `--text-xl` | `2rem` | Ukuran judul tingkat dua dan judul kecil |
| `--text-3xl` | `3.5rem` | Ukuran judul utama |
| `--radius-md` | `0.75rem` | Lengkungan sudut kartu dan kontrol |
| `--shadow-1` | `0 0.25rem 1rem rgb(37 37 31 / 0.08)` | Bayangan kartu |
| `--color-bg` | `#f4f1ea` | Latar belakang halaman |
| `--color-fg` | `#25251f` | Warna teks utama |
| `--color-surface` | `#fffdf8` | Latar kartu dan kontrol form |
| `--color-border` | `#d7d1c3` | Garis batas komponen |
| `--color-primary` | `#176b5b` | Aksen utama, tautan, judul, dan tombol |
| `--color-danger` | `#a93d2f` | Penanda input yang tidak valid |
| `--color-focus` | `#c85b28` | Indikator fokus keyboard |

Kriteria audit satu baris: perubahan pada `--color-primary` di lapisan semantik harus berdampak pada tautan navigasi, judul/aksen kartu, tombol, dan elemen lain yang memakai token utama. Tema gelap mengganti lapisan semantik yang sama tanpa mengubah token primitif.

Tema manual dibuat dengan checkbox, label, dan selector `:has()` tanpa JavaScript atau penyimpanan browser.

### Riwayat commit Pertemuan 4

| Lembar | Tahap | Pesan commit yang disarankan |
|---|---|---|
| A | Rencana token desain di README | Pertemuan 4: rencana token desain di README |
| B | tokens.css dan pemuatan berkas gaya | Pertemuan 4: tokens.css dan pemuatan berkas gaya |
| C | base.css, reset, dan tipografi | Pertemuan 4: base.css reset dan tipografi |
| D | layout.css, bilah navigasi, dan katalog kartu | Pertemuan 4: layout.css bilah navigasi dan katalog kartu |
| E | Gaya form dan keadaan fokus | Pertemuan 4: gaya form dan keadaan fokus |
| F | Tema gelap dan tombol pengalih | Pertemuan 4: tema gelap dan tombol pengalih |
| G | Tampilan halaman profil selesai | Pertemuan 4: tampilan halaman profil selesai |

Lembar kerja Pertemuan 4 menyediakan titik simpan Git setelah setiap Lembar A sampai G. Tabel di atas mencatat pesan commit yang disarankan oleh lembar kerja.

## Catatan penggunaan AI

Dalam pengerjaan tugas ini, saya menggunakan ChatGPT sebagai pendamping selama proses pengembangan. AI membantu memberikan penjelasan konsep, memberikan contoh kode, membantu penelusuran galat, serta memberikan panduan penggunaan Git dan GitHub. Proses implementasi, pengujian, dan pengelolaan proyek dilakukan oleh saya sendiri dengan mengikuti arahan dan memahami langkah-langkah yang diberikan.

## Pertemuan 9 — P9: DOM, Event, dan Interaktivitas

### Gambaran umum

P9 melatih pemilihan elemen HTML menggunakan Document Object Model (DOM), pembuatan konten halaman dari data JavaScript, dan respons terhadap tindakan pengguna melalui event listener. Folder ini mengembangkan halaman profil dan data proyek JavaScript dari pertemuan sebelumnya, termasuk modul JavaScript dan penggunaan metode array yang didokumentasikan pada Pertemuan 8.

Implementasi yang diperiksa mencakup:

- Daftar proyek yang ditampilkan dari array `daftarProyek`.
- Filter kategori untuk semua proyek, proyek web, proyek aplikasi, dan kategori lainnya.
- Pesan keadaan kosong ketika tidak ada proyek yang cocok dengan kategori terpilih.
- Validasi di sisi klien untuk jenis latihan, tanggal, dan durasi pada form latihan.
- Jadwal, target, gambar, dan kontrol tema berbasis CSS yang sudah ada pada halaman profil.

Form latihan saat ini memvalidasi input dan mencegah perilaku submit bawaan browser. JavaScript yang diperiksa tidak menyimpan data form ke server atau penyimpanan browser.

### Struktur proyek

```text
worksheet-p9/
├── README.md
├── profil.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── gym.webp
└── js/
    ├── app.js
    └── dom.js
```

| Berkas | Fungsi |
| --- | --- |
| `profil.html` | Markup halaman profil, kontrol filter proyek, elemen daftar proyek dan keadaan kosong, form latihan, serta referensi skrip modul. |
| `tokens.css` | Properti kustom CSS untuk jarak, tipografi, warna, dan nilai desain lainnya. |
| `base.css` | Gaya dasar halaman, tipografi, gambar, kontrol form, dan fokus. |
| `layout.css` | Aturan tata letak halaman, navigasi, bagian, dan katalog. |
| `komponen.css` | Gaya komponen form, tombol, pesan galat, gambar berteks, dan kontrol tema. |
| `tema.css` | Aturan skema warna gelap dan penimpaan tema manual melalui checkbox. |
| `gym.webp` | Gambar pada bagian jadwal latihan dan ikon halaman. |
| `js/app.js` | Data profil dan array `daftarProyek` yang diekspor. Berkas ini juga mencatat contoh operasi array di Console browser. |
| `js/dom.js` | Mengimpor data proyek, merender kartu proyek, menangani klik filter kategori, dan memvalidasi form latihan. |

### Lembar A — Memilih elemen DOM

`document.querySelector(selector)` mengembalikan elemen pertama yang cocok dengan selector CSS, atau `null` jika tidak ada elemen yang cocok. Selector harus sesuai dengan elemen di HTML. Contohnya, `#list` memilih elemen dengan `id` bernilai `list`; ID yang keliru akan menghasilkan `null`. JavaScript saat ini mengharapkan selector-nya cocok dengan markup halaman, sehingga elemen yang tidak ditemukan dapat menyebabkan operasi berikutnya gagal.

Selector yang digunakan di `js/dom.js` antara lain:

```js
document.querySelector("#list");
document.querySelector("#empty");
document.querySelector("#filter");
document.querySelector("form");
document.querySelector("#jenis-latihan");
document.querySelector("#tanggal");
document.querySelector("#durasi");
form.querySelector('button[type="submit"]');
```

Untuk setiap kolom form, kode juga memilih pesan galat terkait menggunakan ID kolom tersebut, misalnya `#jenis-latihan-error`.

Untuk memeriksa selector pada halaman yang sudah dimuat, buka Chrome DevTools, pilih **Console**, lalu jalankan selector tersebut. Contoh:

```js
document.querySelector("#list")
document.querySelector("#jenis-latihan-error")
```

Console seharusnya menampilkan elemen yang cocok, bukan `null`. Pastikan elemen yang ditampilkan memang elemen yang dimaksud.

### Lembar B — Merender proyek dari data

`js/app.js` mengekspor `daftarProyek`, yaitu array yang berisi sejumlah objek. Isinya saat ini:

| Judul proyek | Tahun | Selesai | Kategori |
| --- | ---: | --- | --- |
| Health Web | 2026 | Tidak | `web` |
| Aplikasi Pengelolaan Sampah | 2026 | Tidak | `aplikasi` |
| Jadwal dan Target Olahraga | 2026 | Ya | `aplikasi` |

Setiap objek memiliki properti `judul`, `tahun`, `selesai`, dan `category`. `js/dom.js` mengimpor array tersebut dan menggunakannya sebagai sumber daftar proyek yang dirender.

`buildCard(proyek)` membuat satu item daftar. Fungsi ini menetapkan class `card` dan mengisi item dengan judul proyek melalui `textContent`:

```js
function buildCard(proyek) {
    const li = document.createElement("li");
    li.className = "card";
    li.textContent = proyek.judul;
    return li;
}
```

`render(daftar)` membuat satu item daftar untuk setiap objek data dan menambahkan setiap item ke elemen `#list`. Dengan demikian, kartu proyek dibuat dari array, bukan ditulis satu per satu di HTML.

`createElement()` membuat elemen HTML, `className` menetapkan class-nya, `textContent` mengisi teks biasa, dan `append()` menambahkan item baru ke elemen induknya. `textContent` memperlakukan judul sebagai teks, bukan menguraikannya sebagai HTML. Jangan memasukkan konten dari pengguna menggunakan `innerHTML`; menafsirkan input sembarang sebagai markup dapat menimbulkan risiko cross-site scripting (XSS).

### Lembar C — Event delegation dan filter kategori

Tombol filter berada di dalam elemen `#filter`. `js/dom.js` memasang satu listener klik pada elemen induk tersebut, bukan memasang listener terpisah pada setiap tombol:

```js
filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category;
    const selected = daftarProyek.filter(
        (proyek) => category === "all" || proyek.category === category
    );

    render(selected);
});
```

`event.target` adalah elemen yang diklik, sedangkan `closest("button")` mencari tombol terdekat yang memuat elemen tersebut. Pemeriksaan awal mengabaikan klik yang bukan berasal dari tombol. `dataset.category` membaca atribut `data-category` pada tombol. Metode array `filter()` memilih proyek dengan `category` yang cocok dengan nilai terpilih; `all` memilih semua proyek.

HTML saat ini menyediakan kategori `all`, `web`, `aplikasi`, dan `lainnya`. Belum ada proyek berkategori `lainnya` dalam `daftarProyek`, sehingga pemilihan kategori itu menampilkan keadaan kosong. Kode yang diperiksa tidak menambahkan gaya atau status terpilih/aktif pada tombol filter.

### Lembar D — Rendering dan keadaan kosong

`render()` terlebih dahulu mengosongkan daftar agar hasil render baru menggantikan hasil sebelumnya, bukan menggandakannya. Setelah itu, fungsi memeriksa apakah array terpilih kosong. Jika kosong, fungsi menampilkan `#empty` lalu berhenti tanpa membuat kartu. Jika tidak, pesan disembunyikan dan sebuah kartu ditambahkan untuk setiap proyek:

```js
function render(daftar) {
    container.textContent = "";

    if (daftar.length === 0) {
        empty.hidden = false;
        return;
    }

    empty.hidden = true;

    daftar.forEach((proyek) => {
        container.append(buildCard(proyek));
    });
}
```

Teks pesan di `profil.html` adalah “Tidak ada proyek pada kategori ini.” Pemanggilan awal `render(daftarProyek)` menampilkan semua proyek. Listener klik filter dipasang di luar `render()`, sehingga proses render ulang tidak memasang salinan listener tambahan.

### Lembar D — Validasi form latihan

Form memiliki tiga kolom dan masing-masing mempunyai pesan tersendiri:

| Kolom | Selector | Aturan JavaScript | Teks pesan di halaman |
| --- | --- | --- | --- |
| Jenis latihan | `#jenis-latihan` | Nilai tidak boleh kosong setelah `trim()`. | “Isi jenis latihan.” |
| Tanggal | `#tanggal` | Nilai tanggal tidak boleh kosong. | “Pilih tanggal latihan.” |
| Durasi | `#durasi` | Nilai tidak boleh kosong dan harus bernilai angka 1 sampai 300, termasuk batasnya. | “Masukkan durasi 1 sampai 300 menit.” |

`trim()` menghapus spasi di awal dan akhir nilai, sehingga teks yang hanya berisi spasi dianggap kosong. Kolom durasi juga memiliki `min="1"` dan `max="300"` di HTML. JavaScript khusus memeriksa rentang angka, tetapi tidak secara eksplisit memastikan bahwa nilainya bilangan bulat.

`validateField()` menetapkan `aria-invalid="true"` dan menampilkan elemen pesan galat kolom ketika kolom tidak valid. Saat kolom menjadi valid, fungsi menghapus `aria-invalid` dan menyembunyikan pesannya. `validateForm()` memeriksa ketiga kolom dan menonaktifkan tombol submit kecuali semua kolom valid. Fungsi ini dijalankan saat halaman diinisialisasi dan ketika terjadi event `input` pada form. Dalam implementasi saat ini, validasi awal juga menampilkan pesan galat untuk kolom yang masih kosong.

Saat submit, penangan event memanggil `event.preventDefault()` untuk menghentikan pengiriman form bawaan browser dan perpindahan atau pemuatan ulang halaman. Jika validasi gagal, fokus dipindahkan ke kolom pertama yang ditandai tidak valid. Penangan ini tidak menyimpan atau mengirim nilai yang valid ke tempat lain.

Pemeriksaan browser yang disarankan dalam lembar kerja:

1. Submit form saat semua kolom kosong, lalu periksa pesan galat dan perilaku fokus.
2. Isi setiap kolom dan pastikan pesan galatnya hilang setelah nilainya valid.
3. Masukkan hanya spasi pada kolom jenis latihan dan pastikan nilainya dianggap tidak valid.
4. Coba durasi di bawah 1, di atas 300, dan di dalam rentang yang diizinkan.
5. Pastikan tombol submit tetap nonaktif sampai semua kolom valid.
6. Submit form yang valid dan pastikan halaman tidak dimuat ulang. Periksa juga secara terpisah bahwa belum ada fitur penyimpanan data.

Interaksi ini belum diuji di browser dalam pembaruan dokumentasi ini; catat hasil yang benar-benar diamati setelah pemeriksaan dilakukan.

### Lembar E — Pemecahan masalah dan DevTools

Lembar kerja P9 dan tabel pemecahan masalah E.4 yang telah diisi tidak tersedia di ruang kerja yang diperiksa. Karena itu, masalah yang benar-benar diamati maupun akar penyebab yang telah diverifikasi tidak dapat dilaporkan di sini. Jangan anggap contoh di bawah sebagai kejadian yang benar-benar terjadi; gunakan tabel untuk menyalin pengamatan sebenarnya dari lembar kerja E.4 dan pertahankan ketidakpastian jika penyebabnya belum dipastikan.

| Pengamatan sebenarnya dari E.4 | Bukti / cara mereproduksi | Status akar penyebab |
| --- | --- | --- |
| Isi berdasarkan catatan lembar kerja E.4 mahasiswa. Tidak ada kejadian yang dapat diverifikasi dari berkas yang tersedia. | Isi berdasarkan catatan mahasiswa atau bukti dari browser. | Belum diverifikasi sampai diselidiki. |

Saat melakukan debugging halaman, periksa apakah selector menghasilkan `null`, apakah skrip berjalan setelah HTML terkait tersedia, apakah listener filter terpasang pada elemen induk yang benar, apakah render berulang menggandakan kartu, dan apakah keadaan kosong sesuai dengan data terpilih. Gunakan panel **Console**, **Elements**, dan **Event Listeners** di Chrome DevTools untuk memeriksa elemen, galat, dan listener yang terdaftar.

Di Console Chrome DevTools, `monitorEvents()` dapat membantu mengamati event pada elemen, sedangkan `unmonitorEvents()` menghentikan pemantauan tersebut. Contoh:

```js
const filterElement = document.querySelector("#filter");
monitorEvents(filterElement, "click");
unmonitorEvents(filterElement, "click");
```

Perintah tersebut digunakan untuk debugging dan bukan bagian dari kode proyek saat ini.

### Lembar F.1 — Daftar periksa pengujian

Butir yang dicentang di bawah didukung oleh pemeriksaan berkas dalam repositori ini. Butir yang belum dicentang masih memerlukan verifikasi saat dijalankan, pemeriksaan pribadi, atau pemeriksaan repositori jarak jauh sesuai keterangannya.

- [x] Berkas sumber P9 yang diperlukan tersedia di `worksheet-p9/`.
- [ ] Buka halaman di browser dan pastikan tidak ada galat JavaScript di Console.
- [x] Selector yang digunakan di `js/dom.js` sesuai dengan elemen dan pesan galat di `profil.html`.
- [x] Kartu proyek dibuat dari `daftarProyek` di `js/app.js`.
- [x] `render()` mengosongkan kontainer daftar sebelum merender.
- [x] Klik filter kategori ditangani oleh satu listener pada elemen induk `#filter`.
- [x] `render()` memiliki logika untuk menampilkan pesan keadaan kosong saat daftar terpilih tidak berisi data.
- [x] Penangan submit form memanggil `preventDefault()`.
- [x] Setiap kolom form memiliki pesan galat tersendiri di HTML dan validasi terkait di JavaScript.
- [x] Tombol submit dinonaktifkan kecuali ketiga kolom lolos pemeriksaan `validateForm()`.
- [ ] Jalankan pengujian form dari lembar kerja (submit kosong, input yang hanya berisi spasi, memperbaiki kolom tidak valid, batas durasi, dan perilaku tombol submit), lalu catat hasil sebenarnya.
- [ ] Tinjau dan sesuaikan pengungkapan penggunaan AI agar menggambarkan kontribusi setiap pihak dengan akurat.
- [ ] Pastikan proyek berada di repositori GitHub yang benar, lalu verifikasi bahwa berkas P9 sudah di-commit dan di-push.
- [ ] Tambahkan tiga tangkapan layar yang diminta Lembar E setelah mengambilnya; belum ada tangkapan layar tersebut di folder `worksheet-p9/` yang diperiksa.

### Lembar F — Tiket keluar

1. **Elemen, selector, dan variabel:** Daftar proyek adalah elemen `<ul id="list">` di `profil.html`. `document.querySelector("#list")` memilihnya, dan `const container` menyimpan elemen hasil tersebut di `js/dom.js`.
2. **`querySelector()` dan `querySelectorAll()`:** `querySelector()` mengembalikan elemen pertama yang cocok atau `null`. `querySelectorAll()` mengembalikan `NodeList` yang berisi semua elemen cocok. `NodeList` bukan Array dan tidak menyediakan `Array.prototype.map()` secara langsung; gunakan `Array.from(nodeList).map(...)` untuk mengubahnya menjadi Array terlebih dahulu. Kode P9 saat ini menggunakan `querySelector()`, bukan `querySelectorAll()`.
3. **Event delegation:** Event delegation menggunakan satu listener pada elemen induk bersama untuk menangani event dari kontrol turunannya. Di `js/dom.js`, listener pada `filterRow` memanggil `event.target.closest("button")` untuk mengenali tombol filter yang diklik.
4. **Menghapus baris pengosongan kontainer:** Jika `container.textContent = ""` dihapus dari `render()`, setiap tindakan filter akan menambahkan kartu baru tanpa menghapus kartu sebelumnya. Akibatnya, hasil lama dapat tertinggal atau kartu menjadi terduplikasi.
5. **Penyisipan teks yang aman:** `innerHTML` mengurai input sebagai markup dan dapat menimbulkan risiko XSS jika nilainya tidak tepercaya. Sebaliknya, `buildCard()` membuat elemen `<li>` dengan `createElement()` dan memasukkan `proyek.judul` sebagai teks biasa melalui `textContent`.

### Lembar F.2 — Refleksi pembelajaran

Memeriksa selector terhadap HTML membantu mencegah nilai `null` dan kegagalan pada bagian skrip berikutnya. Mengosongkan kontainer sebelum rendering menjaga daftar yang ditampilkan agar sesuai dengan data terbaru. Event delegation memungkinkan satu elemen induk menangani klik pada tombol filter tanpa memasang listener berulang kali. Validasi form memberikan umpan balik yang berguna dan membantu pengguna memperbaiki nilai yang kosong atau di luar rentang sebelum submit.

### Lembar F.3 — Penilaian mandiri dan bukti

Perkiraan nilai pada lembar kerja harus diisi sendiri oleh mahasiswa dengan jujur. README ini tidak menetapkan nilai mahasiswa.

| Komponen penilaian lembar kerja | Bukti yang dapat diperiksa | Perkiraan nilai mahasiswa |
| --- | --- | ---: |
| Memilih dan mengisi elemen — 20 poin | Selector dan referensi elemen di `js/dom.js` yang dicocokkan dengan ID dan elemen form di `profil.html`. | ____ / 20 |
| Rendering dari data — 25 poin | `daftarProyek` di `js/app.js`; `buildCard()` dan `render()` di `js/dom.js`. | ____ / 25 |
| Event dan event delegation — 25 poin | Listener klik yang didelegasikan, `closest("button")`, `dataset.category`, dan `filter()` di `js/dom.js`. | ____ / 25 |
| Validasi form — 20 poin | Markup kolom dan pesan galat di `profil.html`; `validateField()`, `validateForm()`, dan listener form di `js/dom.js`. | ____ / 20 |
| Kerapian kode, pengungkapan AI, dan bukti — 10 poin | Berkas sumber, README ini, pengungkapan yang akurat, catatan pengujian, dan tangkapan layar yang diminta. | ____ / 10 |

### Pengungkapan penggunaan AI untuk Pertemuan 9

Bantuan AI digunakan dalam tugas ini untuk menyusun dan membuat draf README P9 berdasarkan persyaratan lembar kerja yang diberikan serta berkas proyek yang diperiksa di repositori. Pembaruan dokumentasi ini tidak membuktikan siapa yang menulis, menguji, atau mengambil keputusan implementasi untuk kode aplikasi yang sudah ada. Sebelum mengumpulkan tugas, mahasiswa perlu menyunting pengungkapan ini agar menggambarkan kontribusinya sendiri dan bantuan AI lain secara akurat. Jangan mengklaim karya dibuat sepenuhnya mandiri jika terdapat bantuan AI.

### Tangkapan layar dan pengingat pengumpulan

Lembar E meminta tiga tangkapan layar berikut:

1. Halaman dalam keadaan bermasalah dengan panel **Event Listeners** terbuka.
2. Halaman setelah masalah diperbaiki.
3. Halaman saat filter kategori berfungsi.

Catatan lembar kerja E.4 dan tangkapan layar bukti P9 tidak tersedia untuk diverifikasi di folder yang diperiksa. Ambil dan tambahkan tangkapan layar yang diminta setelah mereproduksi serta mencatat keadaan yang benar-benar terjadi; jangan menyebut tangkapan layar sebagai bukti perbaikan sebelum hasilnya diperiksa.

Sebelum mengumpulkan tugas, pastikan seluruh folder `worksheet-p9/` berada di repositori GitHub yang sudah digunakan untuk praktikum PABW, lakukan commit dan push atas perubahan yang dimaksud, lalu periksa halaman repositori GitHub. Pembaruan README ini saja tidak memverifikasi URL remote, commit, push, atau keberadaan berkas di GitHub.

### Ringkasan konsep P9

| Konsep | Peran dalam proyek ini |
| --- | --- |
| Selector DOM | Memilih daftar, filter, pesan keadaan kosong, form, dan input dari JavaScript. |
| `NodeList` | Jenis koleksi yang dikembalikan `querySelectorAll()`; bukan Array, sehingga perlu diubah dengan `Array.from()` sebelum memakai metode khusus Array seperti `map()`. |
| `Array.from()` | Mengubah koleksi iterable atau menyerupai array, seperti `NodeList`, menjadi Array. Konsep ini dibahas untuk tiket keluar, tetapi tidak digunakan pada implementasi P9 saat ini. |
| `createElement()` | Membuat elemen `<li>` untuk kartu proyek. |
| `textContent` | Mengisi judul proyek sebagai teks biasa dan mengosongkan daftar sebelum rendering. |
| `append()` | Menambahkan item proyek yang dibuat ke kontainer daftar. |
| `addEventListener()` | Mendaftarkan penangan klik filter serta penangan input dan submit form. |
| Event delegation | Memungkinkan elemen induk `#filter` menangani klik tombol-tombol turunannya dengan satu listener klik. |
| `event.target.closest()` | Menemukan tombol yang memuat elemen yang diklik. |
| `dataset` | Membaca nilai `data-category` tombol terpilih melalui `button.dataset.category`. |
| `preventDefault()` | Menghentikan navigasi submit bawaan form saat validasi khusus dijalankan. |
| `trim()` | Menghapus spasi di awal dan akhir agar input jenis latihan yang hanya berisi spasi ditolak. |
| Validasi form | Memeriksa ketiga kolom, menampilkan pesan galat, memperbarui `aria-invalid`, mengatur tombol submit, dan memindahkan fokus ke kolom tidak valid saat submit. |
