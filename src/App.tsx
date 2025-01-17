import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Drop } from "./pages/Drop";
import { Footer } from "./components/Footer";
import { Earn } from "./pages/Earn";
import { Friends } from "./pages/Friends";
import { Leaderboard } from "./pages/Leaderboard";

function App() {
  return (
    <div className="relative w-full h-screen bg-[#BFF5FF] overflow-scroll">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
