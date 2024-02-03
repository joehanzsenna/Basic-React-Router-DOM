import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from "./pages/About/AboutIndex";
import ContactsIndex from "./pages/Contacts/ContactsIndex";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FirstNest from "./pages/Home/HomeComponents/HomeFirst/FirstNest";
import SecondNest from "./pages/Home/HomeComponents/HomeFirst/SecondNest";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeIndex />}>
            <Route path="firstnest" element={<FirstNest />} />
            <Route path="secondnest" element={<SecondNest />} />
          </Route>
          <Route path="about" element={<AboutIndex />} />
          <Route path="contacts" element={<ContactsIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
