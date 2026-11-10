---
title: 'Kas Kelas Cerdas'
author: 'Muhammad Fathir Al Faruq'
description: 'Kas kelas cerdas ini merupakan aplikasi Next.js yang dirancang untuk membantu mengelola keuangan kelas. Aplikasi ini menyediakan cara yang sederhana dan transparan untuk melacak pemasukan dan pengeluaran, iuran anggota, serta status keuangan secara keseluruhan. Aplikasi ini menggunakan Firebase sebagai backend dan dibangun dengan Next.js, Tailwind CSS, serta Shadcn UI.'
img: 'https://raw.githubusercontent.com/FTRHOST/MANAGEMENT_KEUANGAN_KELAS/refs/heads/main/docs/kasati25.vercel.app_.png'
pubDate: '2026-11-11T10:42:03.522Z'
---

![](https://raw.githubusercontent.com/FTRHOST/MANAGEMENT_KEUANGAN_KELAS/refs/heads/main/docs/kasati25.vercel.app_.png)

## Daftar Isi

- [Fitur](#fitur)
- [Memulai](#memulai)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
- [Variabel Lingkungan](#variabel-lingkungan)
- [Skrip yang Tersedia](#skrip-yang-tersedia)
- [Struktur Proyek](#struktur-proyek)
- [Dependensi](#dependensi)
- [Kontribusi](#kontribusi)

## Fitur

- **Manajemen Anggota**: Tambah, perbarui, dan hapus anggota kelas.
- **Pelacakan Transaksi**: Catat pemasukan dan pengeluaran beserta detail seperti jumlah, tanggal, deskripsi, dan anggota terkait.
- **Manajemen Iuran**: Atur iuran mingguan atau bulanan serta lacak pembayaran anggota.
- **Ringkasan Keuangan**: Lihat ringkasan status keuangan kelas, termasuk total pemasukan, total pengeluaran, dan saldo saat ini.
- **Autentikasi**: Dasbor admin yang aman untuk mengelola aplikasi.
- **Desain Responsif**: Aplikasi dirancang agar dapat berfungsi dengan baik di perangkat desktop maupun seluler.

## Memulai

Ikuti petunjuk berikut untuk mendapatkan salinan proyek dan menjalankannya di komputer lokal Anda untuk tujuan pengembangan dan pengujian.

### Prasyarat

- [Node.js](https://nodejs.org/) (versi 20 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)
- Proyek [Firebase](https://firebase.google.com/)

### Instalasi

1. **Kloning repositori:**

   ```bash
   git clone https://github.com/FTRHOST/MANAGEMENT_KEUANGAN_KELAS.git
   cd MANAGEMENT_KEUANGAN_KELAS
   ```

2. **Instal dependensi:**

   ```bash
   npm install
   ```

3. **Siapkan proyek Firebase Anda:**
   - Buat proyek baru di [Firebase Console](https://console.firebase.google.com/).
   - Buka pengaturan proyek Anda dan salin konfigurasi Firebase Anda.
   - Buat file `.env.local` di direktori utama (_root_) proyek dan tambahkan konfigurasi Firebase Anda.

## Variabel Lingkungan

Untuk menjalankan proyek ini, Anda perlu menambahkan variabel lingkungan berikut ke dalam file `.env.local` Anda:

`NEXT_PUBLIC_FIREBASE_API_KEY`
`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
`NEXT_PUBLIC_FIREBASE_PROJECT_ID`
`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
`NEXT_PUBLIC_FIREBASE_APP_ID`
`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

## Skrip yang Tersedia

Di dalam direktori proyek, Anda dapat menjalankan perintah berikut:

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan (_development_).
- `npm run build`: Membangun aplikasi untuk produksi (_production_).
- `npm run start`: Memulai server produksi.
- `npm run lint`: Memeriksa kerapian dan standar kode (_linting_).
- `npm run typecheck`: Memeriksa tipe data kode (_type-checking_).

## Struktur Proyek

Struktur proyek ini adalah sebagai berikut:

- `src/app`: Berisi halaman-halaman aplikasi.
- `src/components`: Berisi komponen yang dapat digunakan kembali (_reusable_).
- `src/lib`: Berisi logika inti aplikasi, seperti konfigurasi Firebase, tipe data, dan _server actions_.
- `public`: Berisi aset statis aplikasi.

## Dependensi

Dependensi utama dari proyek ini adalah:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [date-fns](https://date-fns.org/)
- [Zod](https://zod.dev/)

## Kontribusi

Kontribusi sangat diterima! Jika Anda memiliki ide, saran, atau laporan bug, silakan buat _issue_ atau kirimkan _pull request_.
