import "./custom.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./pages/SearchCar";
import CarDetail from "./pages/CarDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<CarDetail />} />
        <Route path="/detailmobil/:id" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
