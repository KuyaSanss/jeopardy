// Data soal Challenge Quiz Technocamp 2026 (TANPA jawaban).
// Urutan kategori mengikuti kolom di papan, kiri -> kanan.
window.SOAL = [
  {
    kategori: "GAME KLASIK",
    soal: [
      { poin: 100, level: "Mudah", teks: "Siapa karakter sampingan di dalam game Mario Bros?" },
      { poin: 200, level: "Mudah", teks: "Dalam game catur, bidak yang dapat bergerak dengan bentuk huruf L adalah?" },
      { poin: 300, level: "Sedang", teks: "Berapa jumlah kotak kecil yang ada di dalam permainan Sudoku standar?" },
      { poin: 400, level: "Sedang", teks: "Pada tahun berapa game Pac-Man pertama kali rilis?" },
      { poin: 500, level: "Sulit", teks: "Siapa pencipta game Tetris?" },
    ],
  },
  {
    kategori: "SEJARAH TEKNOLOGI",
    soal: [
      { poin: 100, level: "Mudah", teks: "Siapa penemu telepon?" },
      { poin: 200, level: "Mudah", teks: "Pada tahun berapa iPhone pertama kali diperkenalkan / dirilis?" },
      { poin: 300, level: "Sedang", teks: "Apa fungsi RAM di dalam komputer?" },
      { poin: 400, level: "Sedang", teks: "Perangkat apa yang digunakan untuk menghubungkan komputer ke internet melalui jaringan nirkabel?" },
      { poin: 500, level: "Sulit", teks: "Apa kepanjangan dari USB?" },
    ],
  },
  {
    kategori: "INFORMATIKA DASAR",
    soal: [
      {
        poin: 100, level: "Mudah", teks: "Apa output dari kode berikut?",
        kode: `for (int i = 0; i <= arr.length; i++) {
    System.out.println(arr[i]);
}`,
      },
      {
        poin: 200, level: "Mudah", teks: "Apa yang akan terjadi pada program jika kamu memanggil hitung(-1)?",
        kode: `public static int hitung(int n) {
    if (n == 0) return 0;
    return n + hitung(n - 1);
}`,
      },
      {
        poin: 300, level: "Sedang", teks: "Error atau benar? Kalau error, kenapa? Kalau benar, apa outputnya?",
        kode: `for (int i = 1; i <= 3; i++); {
    System.out.println("Angka: " + i);
}`,
      },
      {
        poin: 400, level: "Sedang", teks: "Berapa hasil akhir variabel 'total' yang dicetak?",
        kode: `public class Soal2 {
    public static void main(String[] args) {
        int[] data = {2, 5, 8, 9, 12};
        int total = 0;

        for (int i = 0; i < data.length; i++) {
            if (data[i] % 2 == 0) {
                total += data[i];
            }
        }
        System.out.println("Total: " + total);
    }
}`,
      },
      {
        poin: 500, level: "Sulit", teks: "Apakah kode di bawah akan error atau cetak angka?",
        kode: `public class Soal3 {
    public static void main(String[] args) {
        int[] data = {10, 20, 30, 40, 50};

        // Perhatikan indeks yang diakses!
        int x = data[data.length - data.length];

        System.out.println("Nilai x: " + x);
    }
}`,
      },
    ],
  },
  {
    kategori: "LOGIKA DAN TEKA-TEKI",
    soal: [
      {
        poin: 100, level: "Mudah",
        teks: "Dengarkan baik-baik dan hitung langsung di kepala:\nMulai dari 1000. Tambahkan 40. Tambahkan 1000 lagi. Tambahkan 30. Tambahkan 1000 lagi. Tambahkan 20. Tambahkan 1000 lagi. Tambahkan 10.\nBerapa hasil akhirnya?",
      },
      {
        poin: 200, level: "Mudah",
        teks: "Seorang programmer menemukan 10 bug di dalam kodenya. Ia berhasil memperbaiki 3 bug, tapi perbaikan itu justru menimbulkan 2 bug baru.\nBerapa jumlah total bug di kodenya sekarang?",
      },
      {
        poin: 300, level: "Sedang",
        teks: "Kamu sedang mengantre pembuatan KTM. Dari depan, kamu di urutan ke-10. Dari belakang, kamu juga di urutan ke-10.\nBerapa total orang di dalam antrean tersebut?",
      },
      {
        poin: 400, level: "Sedang",
        teks: "Seorang mahasiswa mengambil 20 SKS. Setiap mata kuliah bobotnya 2 SKS atau 3 SKS. Total mata kuliah yang ia ambil ada 8.\nBerapa banyak mata kuliah yang berbobot 3 SKS?",
      },
      {
        poin: 500, level: "Sulit",
        teks: "Kamu duduk di ruangan gelap gulita. Di meja ada 100 koin: tepat 10 koin posisi Angka dan 90 koin posisi Gambar. Kamu tidak bisa melihat atau merasakan mana Angka dan mana Gambar.\nBagaimana caramu membagi koin menjadi 2 tumpukan (jumlah bebas) sehingga jumlah koin Angka di kedua tumpukan sama persis?",
      },
    ],
  },
  {
    kategori: "INTERNET & POP CULTURE",
    soal: [
      { poin: 100, level: "Mudah", teks: "Istilah bahasa gaul internet apa yang populer untuk menyebut karisma atau daya tarik seseorang dalam memikat orang lain?" },
      { poin: 200, level: "Mudah", teks: "Lagu anak-anak asal Korea Selatan apa yang dipopulerkan oleh Pinkfong dan menjadi video pertama di YouTube yang menembus 10 miliar tayangan?" },
      { poin: 300, level: "Sedang", teks: "Apa istilah populer di internet untuk konten yang sengaja dibuat memancing kemarahan warganet demi mendongkrak trafik, klik, dan interaksi?" },
      { poin: 400, level: "Sedang", teks: "Istilah \"NPC\" sering dipakai di media sosial untuk menyebut orang yang bertindak kaku atau hanya mengikuti arus. Apa kepanjangan asli dari NPC yang berasal dari dunia video game?" },
      { poin: 500, level: "Sulit", teks: "Apa judul video berdurasi 19 detik yang diunggah salah satu pendiri YouTube, Jawed Karim, pada 23 April 2005 dan tercatat sebagai video pertama di YouTube?" },
    ],
  },
  {
    kategori: "SEPUTAR UC DAN IMT",
    soal: [
      { poin: 100, level: "Mudah", teks: "Di kota apa kampus utama Universitas Ciputra berada?" },
      { poin: 200, level: "Mudah", teks: "Universitas Ciputra dikenal berfokus pada pendidikan di bidang apa?" },
      { poin: 300, level: "Sedang", teks: "Pada tahun berapa Universitas Ciputra berdiri?" },
      { poin: 400, level: "Sedang", teks: "Kapan SIFT diresmikan?" },
      { poin: 500, level: "Sulit", teks: "Di kota mana UC membuka kampus keduanya pada tahun 2021?" },
    ],
  },
  {
    kategori: "GADGET DAN HARDWARE",
    soal: [
      { poin: 100, level: "Mudah", teks: "Komponen komputer yang sering disebut sebagai \"otak\" yang memproses instruksi adalah..." },
      { poin: 200, level: "Mudah", teks: "Perangkat input yang dipakai untuk mengetik disebut..." },
      { poin: 300, level: "Sedang", teks: "Apa nama media penyimpanan berbasis memori flash tanpa bagian mekanis yang bergerak?" },
      { poin: 400, level: "Sedang", teks: "Apa nama teknologi layar yang tiap pikselnya memancarkan cahaya sendiri sehingga warna hitamnya sangat pekat?" },
      { poin: 500, level: "Sulit", teks: "Apa nama konfigurasi dua modul RAM yang bekerja paralel sehingga bandwidth memori hampir dua kali lipat?" },
    ],
  },
];
