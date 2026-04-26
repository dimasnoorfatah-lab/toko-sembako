<<<<<<< HEAD
# 🏪 Toko Berkah Jaya - Website E-Commerce

Sebuah website modern untuk toko online yang menjual sembako, gas LPG, dan air isi ulang. Website ini dibangun dengan HTML, CSS, dan JavaScript pure (tanpa framework).

## 📁 Struktur Folder

```
project ai web 2/
├── index.html                 # Halaman beranda (Home)
├── assets/
│   ├── style.css             # Stylesheet semua halaman
│   └── script.js             # JavaScript bersama (fungsi global)
├── pages/
│   ├── katalog.html          # Halaman katalog produk
│   ├── keranjang.html        # Halaman keranjang belanja
│   ├── pesanan.html          # Halaman riwayat pesanan
│   └── profil.html           # Halaman profil pengguna
└── README.md                 # File dokumentasi ini
```

## 🎯 Fitur Utama

### 1. **Beranda (Home)**
- Hero section dengan penawaran menarik
- Statistik toko (500+ produk, 4.9⭐ rating, dll)
- Kategori produk (Sembako, Gas, Air, dll)
- Produk unggulan dengan filter
- Layanan toko
- Testimoni pelanggan
- Jam operasional & metode pembayaran
- Call-to-action WhatsApp

### 2. **Katalog Produk**
- Grid produk 2 kolom responsif
- Filter berdasarkan kategori
- Filter berdasarkan tab (Terlaris, Termurah, Terbaru, Promo, Stok Ada)
- Search/cari produk real-time
- Tombol tambah ke keranjang dengan animasi

### 3. **Keranjang Belanja**
- Tampilkan item yang ditambahkan
- Kalkulasi otomatis subtotal & total
- Tombol hapus item
- Integrasi WhatsApp untuk checkout
- Informasi pengiriman & metode pembayaran

### 4. **Pesanan Saya**
- Daftar riwayat pesanan
- Filter status pesanan (Semua, Diproses, Selesai, Dibatalkan)
- Detail pesanan dengan jumlah & tanggal
- Informasi bantuan status pesanan

### 5. **Profil Pengguna**
- Kartu profil dengan avatar & rating
- Info akun (nama, HP, email, alamat)
- Tombol edit profil via WhatsApp
- Riwayat transaksi dengan detail
- Preferensi notifikasi & langganan
- Kontak bantuan (WhatsApp, Email)
- Tombol logout

## 💾 Data Penyimpanan

Website menggunakan **localStorage** untuk:
- Menyimpan data keranjang belanja
- Menyimpan riwayat pesanan
- Persistensi data antar halaman

## 🎨 Design & Branding

### Warna Utama
- **Amber**: `#BA7517` (warna brand utama)
- **Green**: `#3B6D11` (warna sekunder)
- **Background**: `#FDFAF4` (cream lembut)

### Typography
- **Display Font**: Playfair Display (untuk judul)
- **Body Font**: Plus Jakarta Sans (untuk konten)

### Responsive Design
- Mobile-first approach
- Max-width: 480px (mobile optimized)
- Bottom navigation bar tetap
- Semua elemen responsif

## 🚀 Cara Menggunakan

1. **Buka Website**
   - Buka file `index.html` di browser
   - Atau buka live server jika menggunakan VS Code

2. **Navigasi**
   - Gunakan bottom nav bar untuk berpindah antar halaman
   - Atau klik link di dalam setiap halaman

3. **Tambah ke Keranjang**
   - Klik tombol `+` pada produk
   - Item akan disimpan di keranjang

4. **Checkout**
   - Buka halaman Keranjang
   - Klik "Pesan via WhatsApp"
   - Akan diarahkan ke WhatsApp dengan message otomatis

## 📱 Fitur Khusus

### 1. Search Real-Time
```javascript
// Cari produk berdasarkan nama
filterProducts()
```

### 2. Add to Cart dengan Animasi
```javascript
// Tombol akan berubah jadi ✓ dengan warna hijau
addToCart(btn, name, price)
```

### 3. LocalStorage Integration
```javascript
// Data tersimpan otomatis
let cart = JSON.parse(localStorage.getItem('cart')) || []
localStorage.setItem('cart', JSON.stringify(cart))
```

### 4. WhatsApp Integration
```javascript
// Buka WhatsApp dengan message otomatis
openWhatsApp()
checkoutViaWhatsApp()
```

## 🔗 Link Halaman

| Halaman | URL | Icon |
|---------|-----|------|
| Beranda | `index.html` | 🏠 |
| Katalog | `pages/katalog.html` | 🛍️ |
| Keranjang | `pages/keranjang.html` | 🛒 |
| Pesanan | `pages/pesanan.html` | 📋 |
| Profil | `pages/profil.html` | 👤 |

## 📦 Produk Contoh

1. Beras Premium 5kg - Rp 68.000 (Promo)
2. Minyak Goreng 2L - Rp 34.000
3. Gas LPG 3kg - Rp 21.000
4. Air Galon Isi Ulang - Rp 6.000
5. Telur Ayam 1kg - Rp 28.000
6. Gula Pasir 1kg - Rp 14.000 (Promo)
7. Gas LPG 12kg - Rp 185.000
8. Air Isi Ulang 1L - Rp 500/liter
9. Indomie Goreng - Rp 3.500
10. Bumbu Racik Lengkap - Rp 5.000

## 🎯 Kontak Toko

- **WhatsApp**: 0812-xxxx-xxxx
- **Alamat**: Jl. Pahlawan No. 12, RT 03/RW 05, Sukajaya, Bogor
- **Email**: tokoberkah@email.com
- **Jam Operasional**: Senin-Sabtu 06.00-21.00, Minggu 07.00-20.00

## 📝 Catatan Penting

- Semua data disimpan di localStorage (local browser)
- Untuk production, gunakan backend API
- Nomor WhatsApp & email dapat disesuaikan di kode
- Gambar produk menggunakan emoji (bisa diganti dengan URL gambar)

## 🔧 Customization

### Ubah Nomor WhatsApp
Edit di `assets/script.js`:
```javascript
const no = '6281200000000'; // Ganti dengan nomor Anda
```

### Ubah Warna Brand
Edit di `assets/style.css`:
```css
--amber: #BA7517;      /* Ubah ke warna pilihan */
--green: #3B6D11;      /* Ubah ke warna pilihan */
```

### Tambah Produk Baru
Edit di halaman masing-masing (katalog.html, index.html):
```html
<div class="prod-card" data-cat="kategori" data-price="harga">
  <!-- Struktur produk -->
</div>
```

## 📄 License

© 2025 Toko Berkah Jaya - All Rights Reserved

---

Dibuat dengan ❤️ untuk memudahkan bisnis toko online Anda.
=======
# toko-sembako
>>>>>>> da8b563382d307bb9de687ed9b05c12161f19c12
