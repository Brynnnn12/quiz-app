import { motion } from "framer-motion";
import { FaHome, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";
import yunusImage from "../../assets/yunus.png";

const ErrorPage = () => {
  // Variants untuk animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const fishVariants = {
    swim: {
      x: [0, 20, 0],
      y: [0, -10, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
      },
    },
    swallow: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const mouthVariants = {
    open: {
      d: "M15,50 Q20,55 25,50 Q20,45 15,50",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    close: {
      d: "M15,50 Q20,52 25,50 Q20,48 15,50",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const jonahVariants = {
    enter: {
      x: [100, 0, -50],
      y: [0, 0, 20],
      scale: [0.5, 1, 0.8],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.6, 1],
      },
    },
  };

  const bubbleVariants = {
    float: {
      y: [0, -20, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${yunusImage})` }}
    >
      <div className="max-w-2xl mx-auto text-center relative">
        {/* Ikan Besar (Ikan Nabi Yunus) */}
        <motion.div
          className="absolute -top-20 left-1/2 transform -translate-x-1/2"
          variants={fishVariants}
          animate="swim"
        >
          <svg className="w-40 h-32" viewBox="0 0 200 100">
            {/* Body ikan */}
            <motion.path
              d="M20,50 Q40,30 60,50 Q40,70 20,50"
              fill="#4FD1C5"
              fillOpacity="0.7"
              stroke="#2C7A7B"
              strokeWidth="2"
            />
            {/* Ekor ikan */}
            <motion.path
              d="M60,50 Q80,40 90,50 Q80,60 60,50"
              fill="#4FD1C5"
              fillOpacity="0.7"
              stroke="#2C7A7B"
              strokeWidth="2"
            />
            {/* Mata ikan */}
            <circle cx="30" cy="45" r="5" fill="white" />
            <circle cx="30" cy="45" r="2" fill="black" />
            {/* Mulut ikan yang beranimasi */}
            <motion.path
              variants={mouthVariants}
              animate={["close", "open", "close"]}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              d="M15,50 Q20,52 25,50 Q20,48 15,50"
              stroke="#2C7A7B"
              strokeWidth="2"
              fill="none"
            />
            {/* Sirip atas */}
            <path d="M35,35 Q40,25 45,35" fill="#2C7A7B" />
            {/* Sirip bawah */}
            <path d="M35,65 Q40,75 45,65" fill="#2C7A7B" />
          </svg>
        </motion.div>

        {/* Nabi Yunus masuk ke mulut ikan */}
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2"
          variants={jonahVariants}
          animate="enter"
        >
          <svg className="w-8 h-8" viewBox="0 0 50 50">
            {/* Kepala */}
            <circle
              cx="25"
              cy="20"
              r="8"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
            {/* Mata */}
            <circle cx="23" cy="18" r="1.5" fill="black" />
            <circle cx="27" cy="18" r="1.5" fill="black" />
            {/* Mulut */}
            <path
              d="M23,22 Q25,24 27,22"
              stroke="black"
              strokeWidth="1"
              fill="none"
            />
            {/* Tubuh */}
            <rect
              x="20"
              y="28"
              width="10"
              height="15"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
            {/* Lengan */}
            <rect
              x="15"
              y="30"
              width="5"
              height="8"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
            <rect
              x="30"
              y="30"
              width="5"
              height="8"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
            {/* Kaki */}
            <rect
              x="22"
              y="43"
              width="3"
              height="7"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
            <rect
              x="25"
              y="43"
              width="3"
              height="7"
              fill="#FBD38D"
              stroke="#D69E2E"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Gelembung udara */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${10 + i * 5}%`,
              width: `${5 + i * 2}px`,
              height: `${5 + i * 2}px`,
            }}
            variants={bubbleVariants}
            animate="float"
            transition={{ delay: i * 0.5 }}
          />
        ))}

        {/* Konten utama */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-blue-800 bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-400 border-opacity-20 mt-32"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-4 text-yellow-300"
          >
            404
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold mb-6"
          >
            Halaman Tidak Ditemukan
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl mb-8 text-blue-100"
          >
            Sepertinya Anda tersesat di lautan website ini, seperti Nabi Yunus
            di dalam perut ikan.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <FaHome /> Kembali ke Home
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <FaRedo /> Muat Ulang
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Ikan kecil */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${40 + i * 15}%`,
              left: `${i * 30}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg className="w-16 h-12" viewBox="0 0 100 60">
              <path
                d="M10,30 Q25,20 40,30 Q25,40 10,30"
                fill="#63B3ED"
                fillOpacity="0.6"
                stroke="#2C5282"
                strokeWidth="1.5"
              />
              <circle cx="25" cy="27" r="2.5" fill="black" />
            </svg>
          </motion.div>
        ))}

        {/* Dekorasi karang */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,120 Q200,80 400,100 Q600,60 800,90 Q1000,40 1200,80 L1200,120 L0,120 Z"
              fill="#2D3748"
              fillOpacity="0.4"
            />
            <path
              d="M0,120 Q100,100 300,110 Q500,70 700,100 Q900,50 1200,90 L1200,120 L0,120 Z"
              fill="#4A5568"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
