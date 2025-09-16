import { useNavigate } from "react-router-dom";
import { FaClock, FaListUl, FaPlay, FaArrowLeft } from "react-icons/fa";

export default function QuizInstructions() {
  const navigate = useNavigate();

  const instructions = [
    "Baca setiap pertanyaan dengan teliti sebelum menjawab",
    "Pilih satu jawaban dari empat pilihan yang tersedia",
    "Setelah memilih jawaban, tunggu sebentar untuk melihat feedback",
    "Jawaban yang benar akan ditandai dengan warna hijau",
    "Jawaban yang salah akan ditandai dengan warna merah",
    "Sistem akan otomatis pindah ke pertanyaan berikutnya",
    "Skor akan dihitung berdasarkan jumlah jawaban benar",
    "Anda dapat mengulang quiz kapan saja dengan tombol 'Main Lagi'",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-26 px-4">
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* Increased max-width for better landscape layout */}
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
            <h1 className="text-3xl font-bold text-white text-center">
              Kuis Pengetahuan Nabi
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Uji pengetahuan Anda tentang para nabi
            </p>
          </div>
        </div>
        {/* Info Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Waktu Pengerjaan */}
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaClock className="text-blue-500 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Waktu Pengerjaan
                  </h3>
                </div>
                <p className="text-gray-600">± 5-10 menit</p>
                <p className="text-sm text-gray-500 mt-1">
                  Waktu yang disarankan untuk menyelesaikan semua pertanyaan
                </p>
              </div>

              {/* Jumlah Soal */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <FaListUl className="text-green-500 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Jumlah Pertanyaan
                  </h3>
                </div>
                <p className="text-gray-600">10 Pertanyaan</p>
                <p className="text-sm text-gray-500 mt-1">
                  Setiap pertanyaan memiliki 4 pilihan jawaban
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tata Cara */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaListUl className="mr-2 text-blue-500" />
              Tata Cara Pengerjaan
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {" "}
              {/* Changed to grid for landscape layout */}
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tips */}
        <div className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              💡 Tips untuk Hasil Maksimal
            </h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Bacalah setiap pertanyaan dengan tenang</li>
              <li>• Jangan terburu-buru dalam menjawab</li>
              <li>• Jika ragu, gunakan intuisi Anda</li>
              <li>• Nikmati proses belajar dari quiz ini</li>
            </ul>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-200"
              >
                <FaArrowLeft className="mr-2" />
                Kembali ke Home
              </button>
              <button
                onClick={() => navigate("/quiz")}
                className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
              >
                <FaPlay className="mr-2" />
                Mulai Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
