import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoutes from "./AppRoutes.jsx";
export default function App() {
  const location = useLocation();
  const showNavBar = !["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {showNavBar && (
        <header>
          <Navbar />
        </header>
      )}
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}
