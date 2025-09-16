import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./components/loading/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="initial-loading" />
      ) : (
        <AppRoutes key="app-routes" />
      )}
    </AnimatePresence>
  );
}

export default App;
