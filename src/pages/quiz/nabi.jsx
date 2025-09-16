import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaRedo,
  FaTrophy,
  FaStar,
  FaClock,
  FaExclamationTriangle,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import quizData from "../../data/quizNabi.json";
import QuestionCard from "../../components/quiz/QuestionCard";
import ScoreCard from "../../components/quiz/ScoreCard";
import ProgressBar from "../../components/quiz/ProgressBar";
import ExitQuizModal from "../../components/ExitQuizModal";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const navigate = useNavigate();

  // Shuffle questions on component mount
  useEffect(() => {
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showScore && !isTimeUp) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showScore) {
      setIsTimeUp(true);
      setShowScore(true);
    }
  }, [timeLeft, showScore, isTimeUp]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Get timer color based on time left
  const getTimerColor = () => {
    if (timeLeft <= 60) return "text-red-500"; // Last minute - red
    if (timeLeft <= 120) return "text-yellow-500"; // Last 2 minutes - yellow
    return "text-green-500"; // Normal - green
  };

  const handleAnswerOptionClick = (option) => {
    const correct = option === shuffledQuestions[currentQuestion].correctAnswer;
    setSelectedOption(option);
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    // Tunggu sebentar sebelum pindah ke pertanyaan berikutnya
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < shuffledQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setTimeLeft(600); // 10 minutes
    setIsTimeUp(false);
  };

  const exitQuiz = () => {
    setShowExitModal(true);
  };

  const handleExitConfirm = () => {
    setShowExitModal(false);
    setShowScore(true);
  };

  const handleExitCancel = () => {
    setShowExitModal(false);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className=" py-26 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50  px-4">
      <div className="max-w-4xl mx-auto">
        {/* Loading state while shuffling */}
        {shuffledQuestions.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat soal...</p>
            </div>
          </div>
        ) : (
          <div>
            {/* Header with Timer */}
            <div className="rounded-2xl shadow-xl overflow-hidden mb-6 backdrop-blur-sm bg-white/90">
              <div className="relative">
                <div className="p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        Kuis Pengetahuan Nabi
                      </h1>
                      <p className="text-blue-100 text-sm">
                        Uji pengetahuan Anda tentang para nabi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exit Button - Only show when quiz is active */}
                {!showScore && (
                  <div className="absolute top-4 left-4">
                    <motion.button
                      onClick={exitQuiz}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-xl border border-white/30 transition-all duration-300 flex items-center space-x-2"
                    >
                      <FaArrowLeft className="text-sm" />
                      <span className="text-sm font-medium">Keluar</span>
                    </motion.button>
                  </div>
                )}

                {/* Timer Display - Only show when quiz is active */}
                {!showScore && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-white text-lg" />
                      <span className={`text-xl font-bold ${getTimerColor()}`}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                    {timeLeft <= 60 && (
                      <div className="flex items-center mt-1">
                        <FaExclamationTriangle className="text-red-300 text-xs mr-1" />
                        <span className="text-red-200 text-xs font-medium">
                          Waktu hampir habis!
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/95">
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {showScore ? (
                    <motion.div
                      key="score"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isTimeUp ? (
                        <div className="text-center py-12">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6"
                          >
                            <FaClock className="w-12 h-12 text-red-500" />
                          </motion.div>
                          <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Waktu Habis!
                          </h2>
                          <p className="text-gray-600 mb-8 text-lg">
                            Maaf, waktu pengerjaan quiz telah habis.
                          </p>
                          <div className="bg-gray-50 rounded-xl p-6 mb-8">
                            <p className="text-sm text-gray-500 mb-2">
                              Skor Anda:
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                              {score} dari {shuffledQuestions.length}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                              onClick={restartQuiz}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <FaRedo className="inline mr-2" />
                              Coba Lagi
                            </motion.button>
                            <motion.button
                              onClick={goToHome}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <FaHome className="inline mr-2" />
                              Kembali ke Home
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <ScoreCard
                          score={score}
                          quizData={shuffledQuestions}
                          restartQuiz={restartQuiz}
                          goToHome={goToHome}
                        />
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`question-${currentQuestion}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProgressBar
                        currentQuestion={currentQuestion}
                        totalQuestions={shuffledQuestions.length}
                        score={score}
                      />
                      <QuestionCard
                        currentQuestion={currentQuestion}
                        quizData={shuffledQuestions}
                        selectedOption={selectedOption}
                        isCorrect={isCorrect}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                        onNext={() => {
                          const nextQuestion = currentQuestion + 1;
                          if (nextQuestion < shuffledQuestions.length) {
                            setCurrentQuestion(nextQuestion);
                            setSelectedOption(null);
                            setIsCorrect(null);
                          } else {
                            setShowScore(true);
                          }
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Exit Quiz Modal */}
        <ExitQuizModal
          isOpen={showExitModal}
          onClose={handleExitCancel}
          onConfirm={handleExitConfirm}
        />
      </div>
    </div>
  );
}
