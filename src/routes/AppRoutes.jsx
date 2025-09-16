import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Quiz from "../pages/quiz/nabi";
import QuizInstructions from "../pages/quiz/QuizInstructions";
import Main from "../pages/home/main";
import ErrorPage from "../pages/error";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/instructions" element={<QuizInstructions />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
