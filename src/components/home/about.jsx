import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaMosque,
  FaPray,
  FaHandsHelping,
} from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaMosque className="text-blue-600 text-2xl" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-gray-800 text-3xl md:text-4xl font-bold mb-4"
          >
            Tentang Quiz Nabi
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Platform interaktif untuk mempelajari sejarah dan kisah para nabi,
            membawa pengetahuan agama ke era digital dengan cara yang menarik.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaBookOpen className="text-blue-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Belajar Interaktif
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pengalaman belajar yang menarik dengan quiz interaktif dan visual.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="text-green-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Komunitas Belajar
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bergabung dengan komunitas pembelajar yang sama-sama ingin
              mendalami sejarah para nabi.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaLightbulb className="text-purple-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Pengetahuan Mendalam
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Materi yang komprehensif tentang kisah dan ajaran para nabi.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <FaHeart className="text-red-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Inspirasi Spiritual
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menginspirasi umat untuk meneladani akhlak para nabi.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <FaStar className="text-yellow-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Pengalaman Premium
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Interface modern yang memberikan pengalaman belajar yang
              menyenangkan.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FaHandsHelping className="text-indigo-600 text-lg" />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Bimbingan Islami
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Panduan yang sesuai dengan ajaran Islam untuk perjalanan
              spiritual.
            </p>
          </motion.div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Mulai Belajar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
