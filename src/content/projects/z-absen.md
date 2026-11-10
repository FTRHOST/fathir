---
title: 'Z-Absen - Sistem Informasi Karyawan'
author: 'Muhammad Fathir Al Faruq'
description: 'Zieda Absen adalah sebuah aplikasi web ringan berbasis Serverless (BaaS) yang dirancang khusus untuk mempermudah HRD (Human Resources Department) dalam melacak absensi, memonitor jam kerja, dan menyetujui pengajuan cuti karyawan secara efisien dan akurat.'
img: 'https://raw.githubusercontent.com/FTRHOST/zabsen-mobile/refs/heads/main/assets/images/app_icon.png'
pubDate: '2026-11-11T10:42:03.522Z'
---

## ✨ Fitur Utama

- **📸 Absensi Wajah & GPS (Geotagging):** Karyawan dapat melakukan Absen Masuk dan Keluar (serta istirahat) menggunakan kamera (_selfie_) dan lokasi langsung (_real-time_).
- **⏱️ Anti Time-Spoofing:** Sistem menggunakan validasi API Waktu Global yang terbebas dari kecurangan manipulasi jam di _smartphone_ karyawan.
- **📝 Form Cuti Dinamis (Drag & Drop):** HRD dapat menyesuaikan formulir isian pengajuan cuti sesuai kebutuhan perusahaan tanpa harus menyentuh kode.
- **📊 Dashboard HR/Admin Terpusat:** Monitoring yang disajikan dalam bentuk grafik dan statistik kehadiran harian secara langsung (_real-time_).
- **💼 Hak Akses (Role-Based):** Sistem membedakan secara cerdas fitur yang muncul untuk akun Karyawan, akun HRD, dan akun Super Admin.

## 🛠️ Teknologi yang Digunakan

Aplikasi ini sangat efisien karena tidak membutuhkan _server hosting_ terpisah untuk Node.js atau PHP (100% _Frontend-Driven_ dengan BaaS Backend).

- **Frontend:** HTML5, CSS3, JavaScript Vanilla (Murni).
- **UI/UX Framework:** Bootstrap 5, FontAwesome, SweetAlert2.
- **Backend & Database:** **Supabase** (PostgreSQL, Supabase Auth, Storage).
- **Fitur Tambahan:** FaceAPI.js (Face Recognition), Leaflet.js (Peta Lokasi), JSZip (Ekstraksi Backup).

## Dokumentasi Aplikasi

![](https://raw.githubusercontent.com/FTRHOST/Z-absen/refs/heads/main/screenshots/absen_page.png)

## 🚀 Panduan Menjalankan Aplikasi (Quick Start)

Untuk mencoba atau menggunakan aplikasi ini untuk perusahaan Anda, silakan ikuti langkah-langkah berikut:

1. **Unduh Proyek**
   Silakan unduh atau _clone_ direktori ini ke komputer Anda.

2. **Persiapan Database Supabase**

   - Buat proyek baru di [Supabase](https://supabase.com/).
   - Buka menu **SQL Editor**, lalu _copy_ dan _paste_ isi file `db/01_starter_schema.sql` untuk membuat tabel, pengaturan keamanan, dan akun _Super Admin_ secara otomatis. (Tekan Run).

3. **Konfigurasi API Key**
   Buka menu **Project Settings -> API** di Supabase, salin _Project URL_ dan _anon public key_.
   Buka file `config.js` di proyek Anda dan ganti isinya dengan kunci tersebut.

4. **Jalankan Aplikasi**
   Karena aplikasi ini sepenuhnya menggunakan HTML/JS, Anda bisa langsung membuka `login.html` menggunakan _Live Server_ di VS Code, atau meng-host file ini di Github Pages, Vercel, maupun cPanel standar.

5. **Login Pertama Kali**
   Gunakan kredensial Super Admin yang ditanamkan otomatis oleh skrip di atas:
   - **Nama Pengguna:** `Super Admin`
   - **Password:** `admin123`

## 📚 Dokumentasi Khusus Tim IT

Bagi para _Developer_ atau Administrator IT yang ingin mengelola proyek ini (seperti melakukan _Factory Reset_, audit keamanan data, atau pembaruan keamanan RLS), silakan membaca panduan mendalam di file:
👉 **[DOKUMENTASI_IT.md](https://github.com/FTRHOST/Z-absen/blob/63f9255119ad64792cc26ffc0dbde36dc43bc360/DOKUMENTASI_IT.md)**

---

_Dibuat untuk sistem tata kelola SDM modern. Segala modifikasi di luar panduan resmi harap diuji coba ulang (testing) pada lingkungan simulasi (staging)._
