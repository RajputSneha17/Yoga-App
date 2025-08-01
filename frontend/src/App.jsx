import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Home from "./Home/Home";
import Create from "./Create";
import Draft from "./Draft";
import Sessions from "./Sessions";
import User from "./user";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const url = "http://localhost:8000";
  return (
    <>
      <BrowserRouter>
        <NavBar setToken={setToken} token={token}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draft" element={<Draft token={token} url={url}/>} />
            <Route path="/createsession" element={<Create url={url} token={token}/>} />
            <Route path="/oursession" element={<Sessions url={url}/>} />
            <Route path="/user" element={<User url={url} setToken={setToken}/>} />
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
