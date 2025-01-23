import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Drop } from "./pages/Drop";
import { Footer } from "./components/Footer";
import { Earn } from "./pages/Earn";
import { Friends } from "./pages/Friends";
import { Leaderboard } from "./pages/Leaderboard";
import Modal from "./components/Modal";
import { createContext, useState } from "react";

const defaultProps = {};
const AppContext = createContext(defaultProps);

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <AppContext.Provider value={{}}>
      <div className="relative w-full h-screen bg-[#BFF5FF] overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/drop" element={<Drop />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
          <Footer></Footer>
          <Modal
            isOpen={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
          ></Modal>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
