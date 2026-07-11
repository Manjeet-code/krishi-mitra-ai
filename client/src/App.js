import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
 import KrishiMitraApp from "./pages/KrishiMitraApp";
//import KrishiMitraApp from "./KrishiMitraApp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<KrishiMitraApp />} />
    </Routes>
  );
}

export default App;