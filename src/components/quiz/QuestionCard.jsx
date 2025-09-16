import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from "react-icons/fa";

const QuestionCard = ({
  currentQuestion,
  quizData,
  selectedOption,
  isCorrect,
  handleAnswerOptionClick,
  onNext,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  const optionVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    tap: { scale: 0.95 },
    hover: { scale: 1.02 },
  };

  const feedbackVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      key={`question-${currentQuestion}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Question */}
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-xl font-semibold text-gray-800 mb-6"
      >
        {quizData[currentQuestion].questionText}
      </motion.h2>

      {/* Answer Options */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {quizData[currentQuestion].answerOptions.map((option, index) => (
          <motion.button
            key={index}
            custom={index}
            variants={optionVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleAnswerOptionClick(option)}
            disabled={selectedOption !== null}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200
            ${
              selectedOption === option
                ? isCorrect
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50"
            }
            ${
              selectedOption !== null &&
              option === quizData[currentQuestion].correctAnswer
                ? "bg-green-100 border-green-500"
                : ""
            }
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            disabled:opacity-80 disabled:cursor-not-allowed`}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3
              ${
                selectedOption === option
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : selectedOption !== null &&
                    option === quizData[currentQuestion].correctAnswer
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
              {selectedOption !== null &&
                option === quizData[currentQuestion].correctAnswer && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <FaCheckCircle className="ml-auto text-green-500" />
                  </motion.div>
                )}
              {selectedOption === option && !isCorrect && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaTimesCircle className="ml-auto text-red-500" />
                </motion.div>
              )}
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Feedback */}
      <AnimatePresence>
        {selectedOption !== null && (
          <motion.div
            variants={feedbackVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`mt-6 p-4 rounded-lg ${
              isCorrect
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <div className="flex items-center">
              {isCorrect ? (
                <>
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span className="font-medium">Jawaban Anda benar!</span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="mr-2 text-red-500" />
                  <span className="font-medium">
                    Jawaban yang benar:{" "}
                    {quizData[currentQuestion].correctAnswer}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Question Button */}
      <AnimatePresence>
        {selectedOption !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex justify-end"
          >
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {currentQuestion + 1 === quizData.length
                ? "Lihat Hasil"
                : "Pertanyaan Berikutnya"}
              <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;
