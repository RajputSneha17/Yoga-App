import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Home from "./Home/Home";
import Create from "./Create";
import Draft from "./Draft";
import Sessions from "./Sessions";
import Edit from "./Edit";
import User from "./user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const url = "http://localhost:8000";

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          setToken(null);
          toast.info("Session expired. Please log in again.");
          window.location.href = "/user";
        }
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        toast.error("Invalid token. Please log in again.");
        window.location.href = "/user";
      }
    }
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <NavBar setToken={setToken} token={token} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draft" element={<Draft token={token} url={url} />} />
            <Route
              path="/createsession"
              element={<Create url={url} token={token} />}
            />
            <Route path="/oursession" element={<Sessions url={url} />} />
            <Route
              path="/user"
              element={<User url={url} setToken={setToken} />}
            />
            <Route path="/edit" element={<Edit url={url} token={token} />} />
          </Routes>
        </main>

        {/* 🔔 Toast notification container */}
        <ToastContainer />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
