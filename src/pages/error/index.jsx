import { motion } from "framer-motion";
import { FaHome, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";
import yunusImage from "../../assets/yunus.png";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen text-white flex items-center justify-start p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${yunusImage})` }}
    >
      <div className="ml-8 flex flex-col items-start gap-2">
        <motion.div
          initial={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          animate={{
            x: [-10, 0, 20, -10, 0],
            opacity: [1, 0.9, 0.7, 0.5, 0.7],
            filter: [
              "blur(0px)",
              "blur(1px)",
              "blur(2px)",
              "blur(4px)",
              "blur(2px)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="flex flex-col items-start gap-2"
        >
          <p className="font-bold text-8xl md:text-9xl drop-shadow-lg select-none">
            404
          </p>
          <span className="font-bold text-2xl md:text-4xl drop-shadow-md select-none">
            Halaman Tidak Ditemukan
          </span>
        </motion.div>

        {/* Tombol Kembali ke Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-xl border border-white/30 transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <FaHome className="text-lg" />
              <span className="font-semibold">Kembali ke Home</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
