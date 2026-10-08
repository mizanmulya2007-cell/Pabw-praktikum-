const nama = "Mizan Mulya El Shirazy";
const peran = "Mahasiswa Informatika";

const keahlian = [
    "Networking",
    "Linux",
    "Cybersecurity",
    "Python"
];

const jumlahProyek = 3;

const kalimatProfil = `Halo, saya ${nama}. Saya adalah ${peran} dengan keahlian ${keahlian.join(", ")} dan telah mengerjakan ${jumlahProyek} proyek.`;

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan({ nama, peran }));
console.log(formatKeahlian(keahlian));
console.log(kalimatProfil);

const profil = {
    nama,
    peran,
    keahlian
};

const daftarProyek = [
    {
        judul: "Health Web",
        tahun: 2026,
        selesai: false
    },
    {
        judul: "Aplikasi Pengelolaan Sampah",
        tahun: 2026,
        selesai: false
    },
    {
        judul: "Jadwal dan Target Olahraga",
        tahun: 2026,
        selesai: true
    }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
    (proyek) => proyek.judul === "Health Web"
);
console.log(katalog);

const judulProyek = daftarProyek.map(
    (proyek) => proyek.judul
);
console.table(judulProyek);