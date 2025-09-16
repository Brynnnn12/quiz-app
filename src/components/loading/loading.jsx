import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import quranGif from "../../assets/quran.gif";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-6 flex items-center justify-center"
        >
          <ClipLoader color="#4F46E5" size={120} />
          <motion.img
            src={quranGif}
            alt="Loading Quran"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg font-semibold text-gray-700"
        >
          Memuat...
        </motion.p>
      </div>
    </motion.div>
  );
}
