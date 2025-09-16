// Hero.jsx - Bagian atas hero
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mosesImage from "../../assets/moses.png";

export default function Hero() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1.0,
        duration: 1.0,
      },
    },
  };

  return (
    <section
      className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative min-h-screen"
      style={{
        backgroundImage: `url(${mosesImage})`,
      }}
    >
      {/* Overlay untuk memastikan text terbaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl text-center px-6 pt-22 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8 leading-tight"
        >
          Selamat datang di Quiz Nabi
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-100 drop-shadow-lg mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Uji pengetahuan Anda tentang Nabi, fairy navigator dalam petualangan
          Link yang menginspirasi
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz/instructions")}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 mt-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold text-xl border-2 border-white/20"
        >
          🚀 Mulai Petualangan
        </motion.button>
      </motion.div>
    </section>
  );
}
