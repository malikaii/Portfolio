import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
