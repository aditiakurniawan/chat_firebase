import { Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
