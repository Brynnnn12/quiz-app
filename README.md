# Quiz Nabi - Aplikasi Kuis Interaktif

Platform pembelajaran interaktif untuk mempelajari sejarah dan kisah para nabi dalam Islam melalui kuis yang menarik dan modern.

## ✨ Fitur Utama

- 🎯 **Kuis Interaktif** - Pengalaman kuis yang menarik dengan timer dan skor real-time
- 📚 **Materi Komprehensif** - Pembelajaran tentang sejarah para nabi
- 🎨 **UI Modern** - Interface yang responsif dan user-friendly
- ⏱️ **Timer Pintar** - Sistem timer dengan peringatan waktu habis
- 📊 **Tracking Progress** - Pantau perkembangan belajar Anda
- 📱 **Responsive Design** - Kompatibel di semua perangkat

## 🚀 Teknologi yang Digunakan

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router v6
- **State Management**: React Hooks

## 📋 Prasyarat

Sebelum menjalankan aplikasi ini, pastikan Anda memiliki:

- Node.js (versi 16 atau lebih baru)
- npm atau yarn
- Git

## 🛠️ Instalasi dan Menjalankan

1. **Clone repository ini**

   ```bash
   git clone https://github.com/username/quiz-nabi.git
   cd quiz-nabi
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan aplikasi dalam mode development**

   ```bash
   npm run dev
   ```

4. **Buka browser dan akses**
   ```
   http://localhost:5173
   ```

## 📁 Struktur Proyek

```
quiz-nabi/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── moses.png
│   │   ├── yunus.png
│   │   └── react.svg
│   ├── components/
│   │   ├── home/
│   │   │   ├── about.jsx
│   │   │   ├── hero.jsx
│   │   │   └── partials/
│   │   │       ├── header.jsx
│   │   │       └── footer.jsx
│   │   ├── quiz/
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── ScoreCard.jsx
│   │   │   └── ProgressBar.jsx
│   │   └── ExitQuizModal.jsx
│   ├── data/
│   │   └── quizNabi.json
│   ├── layouts/
│   │   └── HomeLayout.jsx
│   ├── pages/
│   │   ├── error/
│   │   │   └── index.jsx
│   │   ├── home/
│   │   │   └── main.jsx
│   │   ├── quiz/
│   │   │   ├── nabi.jsx
│   │   │   └── QuizInstructions.jsx
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md
```

## 🎮 Cara Bermain

1. **Halaman Utama** - Lihat informasi tentang aplikasi Quiz Nabi
2. **Halaman Instruksi** - Baca panduan sebelum memulai kuis
3. **Halaman Kuis** - Jawab pertanyaan dengan timer 10 menit
4. **Hasil Kuis** - Lihat skor dan evaluasi performa Anda

## 📖 Fitur Detail

### Timer Pintar

- ⏰ Timer 10 menit untuk setiap sesi kuis
- ⚠️ Peringatan saat waktu tersisa 2 menit (kuning) dan 1 menit (merah)
- 🔔 Notifikasi saat waktu habis

### Sistem Skor

- ✅ Jawaban benar = +1 poin
- 📈 Progress bar real-time
- 🏆 Skor akhir dengan evaluasi

### UI/UX Modern

- 🎨 Design responsif dengan Tailwind CSS
- ✨ Animasi smooth dengan Framer Motion
- 🌙 Tema yang konsisten dan menarik
- 📱 Mobile-friendly

## 🔧 Scripts yang Tersedia

```bash
# Menjalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Menjalankan ESLint
npm run lint
```

## 🤝 Kontribusi

Kontribusi untuk pengembangan aplikasi ini sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## 🙏 Acknowledgments

- Terima kasih kepada Allah SWT atas segala ilmu dan petunjuk
- Inspirasi dari kisah para nabi yang penuh hikmah
- Komunitas React dan open source

## 📞 Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi:

- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Quiz Nabi** - Belajar Sejarah Para Nabi dengan Cara Modern ✨📚
