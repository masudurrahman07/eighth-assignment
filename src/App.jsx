import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const location = useLocation();
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    
    setNavigating(true);
    const timer = setTimeout(() => setNavigating(false), 400);

    return () => clearTimeout(timer);},
     [location]);

  if (navigating) return <LoadingSpinner />; 

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/installation" element={<MyInstallation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

