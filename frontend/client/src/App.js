import { AuthProvider } from "./components/Context/AuthContext";
import Footer from "./layouts/Footer/Footer";
import NavBar from "./layouts/NavBar/Navbar";
import AppRoutes from "./routes/AppRouters";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        < NavBar />
        <ToastContainer />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
