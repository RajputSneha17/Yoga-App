import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Home from "./Home/Home";
import Create from "./Create";
import Draft from "./Draft";
import Sessions from "./Sessions";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draft" element={<Draft />} />
            <Route path="/createsession" element={<Create />} />
            <Route path="/oursession" element={<Sessions />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
