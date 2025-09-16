import { motion } from "framer-motion";
import { FaRedo, FaTrophy, FaTimesCircle, FaStar } from "react-icons/fa";

const ScoreCard = ({ score, quizData, restartQuiz }) => {
  return (
    <motion.div
      key="score"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className={`mx-auto flex items-center justify-center h-24 w-24 rounded-full ${
          score >= quizData.length / 2 ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {score >= quizData.length / 2 ? (
          <FaTrophy className="h-16 w-16 text-green-500" />
        ) : (
          <FaTimesCircle className="h-16 w-16 text-red-500" />
        )}
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-3xl font-bold text-gray-800"
      >
        Skor Anda: {score} dari {quizData.length}
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-gray-600"
      >
        {score === quizData.length
          ? "Luar biasa! Anda menjawab semua pertanyaan dengan benar!"
          : score >= quizData.length / 2
          ? "Kerja bagus! Anda memiliki pengetahuan yang cukup baik."
          : "Tetap semangat! Coba lagi untuk meningkatkan skor Anda."}
      </motion.p>

      {/* Star rating based on score */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center mt-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.8 + i * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <FaStar
              className={`h-8 w-8 ${
                i < Math.floor((score / quizData.length) * 5)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        onClick={restartQuiz}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200 mx-auto"
      >
        <FaRedo className="mr-2" /> Main Lagi
      </motion.button>
    </motion.div>
  );
};

export default ScoreCard;
