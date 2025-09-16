import { motion } from "framer-motion";

const ProgressBar = ({ currentQuestion, totalQuestions, score }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Pertanyaan {currentQuestion + 1} dari {totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-700">Skor: {score}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-blue-600 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
