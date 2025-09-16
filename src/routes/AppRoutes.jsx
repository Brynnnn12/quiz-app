import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HomeLayout from "../components/layouts/HomeLayout";
import Quiz from "../pages/quiz/nabi";
import QuizInstructions from "../pages/quiz/QuizInstructions";
import Main from "../pages/home/main";
import ErrorPage from "../pages/error";
import Loading from "../components/loading/loading";

function AppRoutesContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <Routes key="routes">
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Main />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="quiz/instructions" element={<QuizInstructions />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <AppRoutesContent />
    </Router>
  );
}
