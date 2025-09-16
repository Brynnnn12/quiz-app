export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-white text-2xl font-bold">Quiz Nabi</h2>
          <p className="mt-4 text-gray-400">
            Aplikasi quiz interaktif untuk belajar tentang para nabi dalam
            Islam.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-white transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Tentang
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2">
            <li>📍 Jakarta, Indonesia</li>
            <li>📞 +62 812-3456-7890</li>
            <li>✉ contact@quiznabi.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Quiz Nabi. All rights reserved.
      </div>
    </footer>
  );
}
