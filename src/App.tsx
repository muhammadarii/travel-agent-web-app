import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import FlightPage from "./pages/FlightPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-page" element={<HotelPage />} />
        <Route path="/flight-page" element={<FlightPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
